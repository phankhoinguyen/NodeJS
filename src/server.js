const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/leo', (req, res) => {
    // res.send('Hello Leo')
    res.render('sample.ejs')
})
app.get('/khoinguyen', (req, res) => {
    res.send('<h1> Hello Leo</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})