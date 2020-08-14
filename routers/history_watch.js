// menggunakan express Routers
const router = require('express').Router()

const {
  getAll, 
  addHistory
} = require('../controllers/history_watch')

router.get('/history_watch', getAll);
router.post('/history_watch', addHistory)



module.exports = router;