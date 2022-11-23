const router = require('express').Router();

router.get('/', (req, res) => {
    // specifies that we want to render/use the homepage.handlebars template
    res.render('homepage');
});

// router.get('/', (req, res) => {
//     res.render('homepage', {
//       id: 1,
//       post_url: 'https://handlebarsjs.com/guide/',
//       title: 'Handlebars Docs',
//       created_at: new Date(),
//       vote_count: 10,
//       comments: [{}, {}],
//       user: {
//         username: 'test_user'
//       }
//     });
// });

router.get('/login',(req,res) => {
  res.render('login');
});
  
router.get('/sign-up',(req,res) => {
  res.render('sign-up');
});

module.exports = router;


