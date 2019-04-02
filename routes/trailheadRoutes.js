const express = require('express')
const router = express.Router()
const trailheadController = require('../controllers/trailheadController')

router.get('/', trailheadController.getAll)

module.exports = router