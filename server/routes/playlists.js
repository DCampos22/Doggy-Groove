import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import playlistData from '../data/playlists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(playlistData)
})
router.get('/:playlistId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/playlist.html'))
})

export default router
