const connection = require('../config/database');


module.exports = {
  // getall
  getAll : (req, res) => {
    // query sql
    const myQuery = `SELECT history_watch.id_history, users.id_user, movies.id_movie, subscription.id_subscription, users.fullname, movies.title
              FROM history_watch
              INNER JOIN users ON history_watch.id_user = users.id_user INNER JOIN movies ON history_watch.id_movie = movies.id_movie
              INNER JOIN subscription ON history_watch.id_subscription=subscription.id_subscription;`
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
  addHistory : (req, res) => {
    const {id_user, id_movie, id_subscription} = req.body
    const myQuery = `INSERT INTO history_watch (id_movie, id_user, id_subscription) VALUES (${id_user}, ${id_movie}, ${id_subscription})`;
    connection.query(myQuery, (error, result,) => {
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