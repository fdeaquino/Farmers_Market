// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// UPDATE
// Changed this code because we haven't pushed to Heroku or installed JawsDB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// REPLACE code from above with this code from below once we push to Heroku and Jaws DB

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// }


module.exports = sequelize;








