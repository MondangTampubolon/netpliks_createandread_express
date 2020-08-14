// menggunakan express Routers
const router = require('express').Router()

const {
  getAll,
  addMovies, 
 } = require('../controllers/movies')

router.get('/movies', getAll);
router.post('/movies', addMovies)


module.exports = router;