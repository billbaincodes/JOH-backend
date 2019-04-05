const express = require('express')
const router = express.Router()
const galleryController = require('../controllers/galleryController')

router.get('/', galleryController.getAll)
router.get('/:id', galleryController.getByTrail)


module.exports = router