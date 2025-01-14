require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
// Get the client
const mysql = require('mysql2');
const app = express()
const port = process.env.PORT
const connection = require('./config/database')

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine
configViewEngine(app)


//khai báo route
app.use('/', webRoute); // Sửa lỗi bằng 1 dấu ';' =))))


//test connection 
// Self running function 
// Reason why use it : Synchronize this code 
(async () => {
    try {
        await connection() // Consume more time 
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('>>CONNECTED DATABASE ERROR', error)
    }
})()



