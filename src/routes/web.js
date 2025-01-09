const express = require('express')
const router = express.Router()
const { getHomePage, getLeo, getKhoi } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/leo', getLeo)
router.get('/khoinguyen', getKhoi)

module.exports = router