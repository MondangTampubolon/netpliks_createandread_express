// menggunakan express Routers
const router = require('express').Router()

const {
  getAll,
  addMovies, 
 } = require('../controllers/movies')

router.get('/movies', getAll);
router.post('/movies/create', addMovies)


module.exports = router;