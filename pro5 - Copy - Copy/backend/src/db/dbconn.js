// src/db/dbconn.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('theutkarshgupta_armaan', 'root', 'Ak@12345', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // set to true to see SQL logs
});

try {
  await sequelize.authenticate();
  console.log('Connection to MySQL has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
