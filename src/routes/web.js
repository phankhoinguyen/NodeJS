const express = require('express')
const router = express.Router()
const { getHomePage, getLeo, getKhoi, postUser, getCreate } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/leo', getLeo)
router.get('/khoinguyen', getKhoi)
router.get('/create', getCreate)
router.post('/create-user', postUser)

module.exports = router