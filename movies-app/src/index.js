const express = require('express')
const moviesRouter = require('./routes/movies.r')
const sequelize = require('./config/database')

const PORT = process.env.PORT || 8000

const app = express()

app.use('/', moviesRouter)

sequelize.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log(`Error: << ${err} >>`))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ...`)
})
