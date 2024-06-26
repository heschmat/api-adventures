const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Movie = sequelize.define('movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    imdb_rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false  // Disable createdAt and updatedAt
})

module.exports = Movie;
