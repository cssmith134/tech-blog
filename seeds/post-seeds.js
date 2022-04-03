const Post = require('../models/Post');

const postData = [
    {
        title: "Why MVC is so Important",
        post_text: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer of data, the View layer for design, and the Controller layer for application logic.",
        user_id: 1
    },
    {
        title: "Authentication vs. Authorization",
        post_text: "There is a difference between authentication and authorization. Authentication means confiming your own identity, whereas authorization means being allowed access to the system.",
        user_id: 2
    },
    {
        title: "Object-related mapping",
        post_text: "I have really loved learning about ORMs. It's really simplified the way i create queries in SQL",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;