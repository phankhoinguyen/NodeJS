const connection = require('../config/database')


const getHomePage = (req, res) => {
    res.render('homePage.ejs')

}

const getLeo = (req, res) => {
    res.render('sample.ejs')
}

const getKhoi = (req, res) => {
    res.send('<h1> Hello Leo</h1>')
}

const postUser = (req, res) => {
    let { email, name, city } = req.body
    connection.query(
        `INSERT INTO Users(email , name, city) 
        VALUES (? ,? , ?)`,
        [email, name, city],
        function (err, results) {
            console.log('>>> Results : ', req.body)
            res.send('Add user successfully')
        }
    )
}

module.exports = {
    getHomePage,
    getLeo,
    getKhoi,
    postUser
}