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

module.exports = {
    getHomePage,
    getLeo,
    getKhoi
}