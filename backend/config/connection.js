
const path = require('path');
const env = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Sequelize = require('sequelize');

let sequelize;

if (env.error) {
  throw env.error;
}

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });




}
module.exports = sequelize;