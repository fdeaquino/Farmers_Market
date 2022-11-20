const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // access our User model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234', is_vendor: 1}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        is_vendor: req.body.is_vendor
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id,
                    req.session.username = dbUserData.username,
                    req.session.loggedIn = true;

                res.json(dbUserData)
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

// log user into site
router.post('/login', (req, res) => {
    // expects {username: 'lernantino', password: 'password1234'}

    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }

        // verify user
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id,
                req.session.username = dbUserData.username,
                req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });

});

// log user out
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;