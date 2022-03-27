const seedUsers = require('./user-seeds.js');



const sequelize = require('../config/connection')
console.log("connected")
async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('Database synced');

   await seedUsers();
   // console.log('Users seeded');
  
}

seedAll()