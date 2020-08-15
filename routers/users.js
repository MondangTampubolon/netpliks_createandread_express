// menggunakan express Routers
const router = require('express').Router()

const {
  getAll, 
  addOne
} = require('../controllers/users')

router.get('/users', getAll);
router.post('/users/register', addOne);

module.exports = router;