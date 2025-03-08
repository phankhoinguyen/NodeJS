const connection = require('../config/database')
const { getAllUsers, getUserById, updateUser } = require('../services/CRUDServices')
const User = require('../models/user')

const getHomePage = async (req, res) => {
    let result = await User.find({})
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
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users(email , name, city) VALUES (? ,? , ?)`, [email, name, city]
    // )
    await User.create({
        name,
        email,
        city
    })
    res.send("Created successfully")
}

const getUpdatePage = async (req, res) => {
    let userId = req.params.userId
    let user = await User.findById(userId).exec();
    res.render('update.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body
    await User.updateOne({ _id: id }, { email: email, name: name, city: city })
    res.redirect('/');
}

const getDelete = async (req, res) => {
    let id = req.params.id
    // let [results, fields] = await connection.query(
    //     `DELETE FROM Users WHERE id = ?;`, [id]
    // )
    await User.deleteOne({ _id: id })
    res.redirect('/')
}

module.exports = {
    getHomePage,
    getLeo,
    getKhoi,
    postUser,
    getCreate,
    getUpdatePage,
    postUpdateUser,
    getDelete
}