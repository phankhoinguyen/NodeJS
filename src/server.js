require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const app = express()
const port = process.env.PORT

//config template engine
configViewEngine(app)


//khai báo route
app.use('/', webRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})