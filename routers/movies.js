// menggunakan express Routers
const router = require('express').Router()

const {
  getAll,
  addMovies, 
  updateMovie,
  deleteMovie
 } = require('../controllers/movies')

router.get('/movies', getAll);
router.post('/movies/create', addMovies)
router.put('/movies/update', updateMovie)
router.delete('/movies/delete', deleteMovie)


module.exports = router;