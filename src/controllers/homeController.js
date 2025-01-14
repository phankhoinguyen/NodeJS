const connection = require('../config/database')
const { getAllUsers, getUserById, updateUser } = require('../services/CRUDServices')

const getHomePage = async (req, res) => {
    let result = await getAllUsers()
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

const getUpdatePage = async (req, res) => {
    let userId = req.params.id
    let user = await getUserById(userId)
    res.render('update.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body
    await updateUser(email, name, city, id)
    res.redirect('/');
}

const getDelete = async (req, res) => {
    let id = req.params.id
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?;`, [id]
    )
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