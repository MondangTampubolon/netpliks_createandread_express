// menggunakan express Routers
const router = require('express').Router()

const {
  getAll, 
  addOne,
  updateProfile,
  deleteProfile
} = require('../controllers/users')

router.get('/users', getAll);
router.post('/users/register', addOne);
router.put('/users/update', updateProfile);
router.delete('/users/delete', deleteProfile);

module.exports = router;