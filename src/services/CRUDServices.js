const connection = require('../config/database')

const getAllUsers = async () => {
    let [result, fields] = await connection.query(`SELECT * FROM Users`)
    return result
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `select * from Users Where id =  ?`,
        [userId]
    )
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUser = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?,name = ?, city = ? WHERE id = ?`, [email, name, city, id]
    )
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser
}