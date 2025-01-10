const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDServices')

const getHomePage = async (req, res) => {
    let result = await getAllUsers()
    console.log(">>>controllerS result : ", result)
    res.render('homePage.ejs', { listUsers: result })
}

const getLeo = (req, res) => {
    res.render('sample.ejs')
}

const getKhoi = (req, res) => {
    res.send('<h1> Hello Leo</h1>')
}

const getCreate = (req, res) => {
    res.render('create.ejs')
}

const postUser = async (req, res) => {
    let { email, name, city } = req.body
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email , name, city) VALUES (? ,? , ?)`, [email, name, city]
    )
    console.log('>>>Results :', results)
    res.send("Created successfully")
}

module.exports = {
    getHomePage,
    getLeo,
    getKhoi,
    postUser,
    getCreate
}