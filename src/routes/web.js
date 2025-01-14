const express = require('express')
const router = express.Router()
const { getHomePage, getLeo, getKhoi, postUser, getCreate, getUpdatePage, postUpdateUser, getDelete } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/leo', getLeo)
router.get('/khoinguyen', getKhoi)
router.get('/create', getCreate)
router.post('/create-user', postUser)
// xử lý đường link đặc biệt
router.get('/update/:userId', getUpdatePage)

router.post('/update-user', postUpdateUser)

router.get('/delete/:id', getDelete)

module.exports = router