const seedUsers = require('./user-seeds.js');
const seedPosts = require('./post-seeds.js');


const sequelize = require('../config/connection');

console.log("connected")
async function seedAll() {
    await sequelize.sync({ force: true })
    .then(async function() {
        console.log('Database synced');
    
       await seedUsers();
       // console.log('Users seeded');
       await seedPosts();

    })
  
}

seedAll()