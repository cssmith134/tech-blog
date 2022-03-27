const User = require(
    '../models/User'
);

const userData = [
    {
        username: 'cssmith5',
        email: 'user1234@yahoo.com',
        password: 'password'
    },
    {
        username: 'gary55',
        email: 'gary1234@yahoo.com',
        password: 'password1'
    },
    {
        username: 'john65',
        email: 'john1234@yahoo.com',
        password: 'password2'
    }
]


const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
