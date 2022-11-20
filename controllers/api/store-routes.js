const router = require('express').Router();
const { Store, User, Comment, Category, StoreCategory } = require('../../models');

// get all stores
router.get('/', (req, res) => {
    Store.findAll({
        attributes: [
            'id',
            'store_name',
            'store_description',
        ],
        // order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'store_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                through: StoreCategory,
                as: 'categories'

            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get store by id
router.get('/:id', (req, res) => {
    Store.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'store_name',
            'store_description',
        ],
        // order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'store_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                through: StoreCategory,
                as: 'categories'

            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// create a new store
router.post('/', (req, res) => {
    Store.create(req.body)
        .then((store) => {
            if (req.body.categoryIds.length) {
                const storeCategoryIdArr = req.body.categoryIds.map((category_id) => {
                    return {
                        store_id: store.id,
                        category_id
                    };
                });
                return StoreCategory.bulkCreate(storeCategoryIdArr);
            }
            res.status(200).json(store)
        })
        .then((storeCategoryIds) => res.status(200).json(storeCategoryIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
})
module.exports = router;