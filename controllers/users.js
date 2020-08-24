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
},
//update
updateProfile: (req, res) => {
  const {fullname, username, email, password, address} = req.body
  bcrypt.hash(password,6, (error, hashedPassword) => {
    if(error) {
        res.send({
            message: "password invalid"
        })
    } else {
        // query insert
        const {id} =req.params
        const myQuery = `Update users (fullname, username, email, password, address) VALUES("${fullname}", "${username}", "${email}", "${password}", "${address}")`;
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
                    message: 'Profile Updated',
                    status: 200,
                    result
                })
            }
        })

    }
})
},
//delete
  deleteProfile: (req, res) => {
    const {id} = req.params;
    const myQuery = `Delete from Users WHERE id=${id}`
    connection.query(myQuery, (error, result) => {
      if(error) {
        res.send({
          message:'Profile Still exists',
          status: 500,
        })
      }else {
        res.send ({
          message:'Profile Deleted',
          status: 200,
          result
        })
      }
    })
  }
}