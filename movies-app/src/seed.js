const sequelize = require('./config/database')

const Movie = require('./models/movies.m')

const seed = async () => {
    await sequelize.sync({ force: true })

    await Movie.bulkCreate([
        {title: 'Parasite', release_date: '2019-05-30', imdb_rating: 8.6},
        {title: '1917', release_date: '2019-12-25', imdb_rating: 8.3},
        {title: 'Ford vs. Ferrari', release_date: '2019-11-15', imdb_rating: 8.1},
        {title: 'Joker', release_date: '2019-10-04', imdb_rating: 8.4},
        {title: 'x', release_date: '2020-10-10', imdb_rating: 10},
    ])

    process.exit()
}

seed()
