const seedUsers = require('./user-seeds.js');

//const seedGuitars = require('./user-guitars.js')

const sequelize = require('../config/connection')
console.log("connected")
async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('Database synced');

  //  await seedUsers();
   // console.log('Users seeded');
   // await seedGuitars();
   // console.log('Guitars seeded');
}

seedAll()