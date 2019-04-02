const express = require('express')
const router = express.Router()
const parkController = require('../controllers/parkController')

router.get('/', parkController.getAll)

module.exports = router