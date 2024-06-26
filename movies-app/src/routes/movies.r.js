const express = require('express')

const {
    httpGetAllMovies,
    httpGetMovieByID,
    httpCreateMovie,
    httpDeleteMovie,
    httpUpdateMovie
} = require('./movies.c')

const moviesRouter = express.Router()

moviesRouter.get('/', httpGetAllMovies)
moviesRouter.get('/:id', httpGetMovieByID)
moviesRouter.post('/', httpCreateMovie)
moviesRouter.delete('/:id', httpDeleteMovie)
moviesRouter.put('/:id', httpUpdateMovie)

module.exports = moviesRouter;
