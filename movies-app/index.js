const express = require('express')
const axios = require('axios')

const PORT = 8001
const app = express()

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://get:8000')
        res.status(200).json(response.data)
    } catch (err) {
        console.error(`Error fetching movies: ${err}`)
        res.status(500).send('Internal Server Error.')
    }
})

app.listen(PORT, () => {
    console.log(`Consumer server is running on port ${PORT} ...`)
})
