const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    res.render('homepage', dbPostData[0].get({ plain: true }));
    
  })
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   })
})

module.exports = router;