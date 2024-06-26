const { Sequelize } = require('sequelize')
require('dotenv').config();         // do NOT forget this; otherwise errors like `client password must be a string`

const {
    PG_USER,
    PG_PASSWORD,
    PG_DB,
} = process.env

const sequelize = new Sequelize(PG_DB, PG_USER, PG_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;
