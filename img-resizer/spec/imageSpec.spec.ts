import request from 'supertest'

import express from 'express'
import fs from 'fs'
import path from 'path'
import imageRouter from '../src/routes/image'

const app = express()
app.use('/api/images', imageRouter)

describe('GET /api/images', () => {
    it('should return 400 if parameters are missing', async () => {
        const resp = await request(app).get('/api/images')
        expect(resp.status).toBe(400)
    })

    it('should return 404 if image does not exist', async () => {
        const resp = await request(app).get('/api/images?filename=noSuchFile&width=200&height=200')
        expect(resp.status).toBe(404)
    })

    it('should resize the image and save it in the thumb folder', async () => {
        const filename = 'hamburg_alster'
        const width = 200
        const height = 200
        const outputPath = path.join(__dirname, '../../thumb', `${filename}-${width}x${height}.jpg`)

        // clean up before test
        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath)
        }

        const resp = await request(app).get(`/api/images?filename=${filename}&width=${width}&height=${height}`)
        expect(resp.status).toBe(200)
        expect(fs.existsSync(outputPath)).toBe(true)

        // clean up after test
        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath)
        }
    })
})
