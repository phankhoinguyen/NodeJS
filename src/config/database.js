const mysql = require('mysql2/promise');
require('dotenv').config()
const mongoose = require('mongoose')

var dbState = [{
    value: 0,
    label: "Disconnected"
},
{
    value: 1,
    label: "Connected"
},
{
    value: 2,
    label: "Connecting"
},
{
    value: 3,
    label: "Disconnecting"
}];



//MONGO DB
const connection = async () => {
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME
    }
    // await mongoose.connect('mongodb://root:123456@localhost:27017')
    await mongoose.connect(process.env.DB_HOST, options);
    // Notify when connect successfully
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to database"); // connected to db

}

module.exports = connection