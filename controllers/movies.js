const connection = require('../config/database');


module.exports = {
  // getall
  getAll : (req, res) => {
    // query sql
    const myQuery = 'SELECT * from movies'
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
  // create data
  addMovies : (req, res) => {
    const { title , year, genre, description, url_trailer} = req.body;
    connection.query(`INSERT INTO movies values(null, "${title}", ${year}, "${genre}", "${description}", "${url_trailer}" )`, (error, result) => {
      if(error) {
        res.send({
          message : error,
          status : 500
        })
      } else {
        res.send({
          message : "added",
          status : 200,
          result
        })
      }
    });

  },
  //update
updateMovie: (req, res) => {
  const {id} = req.params;
      const myQuery = `Update movies ${title}, ${year}, ${genre}, ${description}, ${url_trailer} WHERE id=${id}`;
      connection.query(myQuery, (error, result)=>{
          if(error) {
            res.send({
              message:'Error Detected',
              status: 500
            })
          }else {
            res.send ({
              message: 'Update Succesfull',
              status: 201,
              result
            })
          }
      })
     
    },
//delete
  deleteMovie: (req, res) => {
    const {id} = req.params;
    const myQuery = `Delete from movies WHERE id=${id}`
    connection.query(myQuery, (error, result) => {
      if(error) {
        res.send({
          message:'Movie Still exists',
          status: 500,
        })
      }else {
        res.send ({
          message:'Movie Deleted',
          status: 200,
          result
        })
      }
    })
  }
}