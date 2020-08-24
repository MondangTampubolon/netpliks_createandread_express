// menggunakan express Routers
const router = require('express').Router()

const {
  getAll, 
  addHistory,
  deleteHistoryWatch
} = require('../controllers/history_watch')

router.get('/history_watch', getAll);
router.post('/history_watch/add', addHistory)
router.delete('/history_watch/delete', deleteHistoryWatch)



module.exports = router;