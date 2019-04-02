const express = require('express')
const router = express.Router()
const trailController = require('../controllers/trailController')

router.get('/', trailController.getAll)

module.exports = router