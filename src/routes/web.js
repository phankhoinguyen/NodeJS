const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! leo')
})
router.get('/leo', (req, res) => {
    // res.send('Hello Leo')
    res.render('sample.ejs')
})
router.get('/khoinguyen', (req, res) => {
    res.send('<h1> Hello Leo</h1>')
})

module.exports = router