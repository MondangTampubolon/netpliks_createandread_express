const connection = require('../config/database');


module.exports = {
  // getall
  getAll : (req, res) => {
    // query sql
    const myQuery = ' SELECT subscription.id_subscription, users.id_user, users.fullname, users.username, subscription.status FROM subscription INNER JOIN users ON subscription.id_user = users.id_user;'
        //  menjalankan query yang kita buat
    connection.query(myQuery, (error, result, field) => {
      if(error){
        // console.log(error)
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
  addSubscription : (req, res) => {
    const {id_user, status} = req.body;
    const myQuery = `INSERT INTO subscription (id_user, status) VALUES (${id_user}, ${status})`;
    connection.query(myQuery, (error, result) => {
      if(error) {
        console.log(error)
        res.send({
          message: 'error',
          status: 500
        })
      } else {
        res.send ({
          message: `added`,
          status: 200,
          result
        })
      }
    }
    )
  },
//update
//delete
}