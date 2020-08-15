// menggunakan express Routers
const router = require('express').Router()

const {
  getAll,
  addSubscription, 
  } = require('../controllers/subscription')

router.get('/subscription', getAll);
router.post('/subscription/create', addSubscription)


module.exports = router;