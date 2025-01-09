const getHomePage = (req, res) => {
    res.send('Hello World! leoo')
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