const express = require('express')
const router = express.Router()
const { getHomePage, getLeo, getKhoi, postUser } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/leo', getLeo)
router.get('/khoinguyen', getKhoi)
router.post('/create-user', postUser)

module.exports = router