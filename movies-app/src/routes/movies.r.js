const express = require('express')

const {
    httpGetAllMovies,
} = require('./movies.c')

const moviesRouter = express.Router()

moviesRouter.get('/', httpGetAllMovies)

module.exports = moviesRouter;
