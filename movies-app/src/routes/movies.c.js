const Movie = require('../models/movies.m')

exports.httpGetAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll()
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json({'error': err.message})
    }
}

