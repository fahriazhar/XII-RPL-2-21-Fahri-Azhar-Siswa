const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/Siswa')

router.get('/siswa', usercontroller.index )

router.get('/siswa/:id', usercontroller.show)
  
  router.post('/siswa', usercontroller.store)
  
  router.put('/siswa/:id', usercontroller.update)
  
  router.delete('/siswa/:id', usercontroller.delete)

  module.exports = router