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
    console.log('>>>Req body : ', req.body)
    res.send('Add user successfully')
}

module.exports = {
    getHomePage,
    getLeo,
    getKhoi,
    postUser
}