const connection = require('../config/database');
const bcrypt = require('bcrypt')

module.exports = {
  // getall
  getAll : (req, res) => {
    // query sql
    const myQuery = 'SELECT * from users'
    //  menjalankan query yang kita buat
    connection.query(myQuery, (error, result, field) => {
      if(error){
        res.send({
          message: 'error',
          status: 500
        })
      }else {
        res.send({
          message: 'get all data',
          status: 200,
          result
        })
      }
    })
  },
  // get One
 
  // addOne
  addOne : (req, res) => {
    // mendapatkan data dari form body / input
    const {fullname, username, email, password, address} = req.body
    // hash password input sebagai random number/string
    bcrypt.hash(password,6, (error, hashedPassword) => {
        if(error) {
            res.send({
                message: "password invalid"
            })
        } else {
            // query insert
            const myQuery = `INSERT INTO users(fullname, username, email, password, address) VALUES("${fullname}", "${username}", "${email}", "${password}", "${address}")`;
            // eksekusi query
            connection.query(myQuery, (error, result) => {
                if(error){
                    console.log(error)
                    res.send({
                        message: 'error',
                        status: 500
                    })
                } else {
                    res.send({
                        message: 'add One data',
                        status: 200,
                        result
                    })
                }
            })

        }
    })
}
//update
//delete
}