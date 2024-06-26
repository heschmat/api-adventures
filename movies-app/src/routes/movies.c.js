const Movie = require('../models/movies.m')

// GEt all movies
const httpGetAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll()
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json({'error': err.message})
    }
}

// Get movie by ID
const httpGetMovieByID = async (req, res) => {
    try {
        console.log('hi')
        const movie = await Movie.findByPk(parseInt(req.params.id))
        if (movie) {
            res.status(200).json(movie)
        } else {
            res.status(404).send({'INFO': 'Movie not found.'})
        }
    } catch (err) {
        res.status(500).json({'error': err.message})
    }
}

// Create a new movie:
// curl -X POST http://localhost:8000/movies -H "Content-Type: application/json" -d '{"title": "Tenet", "release_date": "2020-08-26", "imdb_rating": 7.5}'
const httpCreateMovie = async (req, res) => {
    try {
        const { title, release_date, imdb_rating } = req.body // body: [object Object]
        const movie = await Movie.create({title, release_date, imdb_rating})
        res.status(201).json(movie)
    } catch (err) {
        res.status(500).json({'error': err.message})
    }
}

// Delete a movie
const httpDeleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id)
        if (movie) {
            await movie.destroy()
            res.status(204).json(movie)
        } else {
            res.status(404).json({'INFO': 'Movie not found.'})
        }
    } catch (err) {
        res.status(500).json({'error': err.message})
    }
}

// Update a movie:
// curl -X PUT http://localhost:8000/movies/1 -H "Content-Type: application/json" -d '{"title": "Parasite", "release_date": "2019-05-30", "imdb_rating": 8.6}'
const httpUpdateMovie = async (req, res) => {
    try {
        const {title, release_date, imdb_rating} = req.body
        const movie = await Movie.findByPk(req.params.id)
        if (movie) {
            movie.title = title
            movie.release_date = release_date
            movie.imdb_rating = imdb_rating
            await movie.save()
        } else {
            res.status(404).json({'INFO': 'Movie not found.'})
        }
    } catch (err) {
        res.status(500).json({'error': err.message})
    }
}

module.exports = {
    httpGetAllMovies,
    httpGetMovieByID,
    httpCreateMovie,
    httpDeleteMovie,
    httpUpdateMovie
}
