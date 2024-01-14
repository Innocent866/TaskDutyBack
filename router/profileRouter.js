const express = require('express')
const router = express.Router()
const {create_pro, all_pro, update_pro, delete_pro, single_pro} = require('../controller/profileConroller')

// create 

router.post('/api/profile',create_pro)

router.get('/api/profile',all_pro)

router.patch('/api/profile/:id',update_pro)

router.delete('/api/profile/:id',delete_pro)

router.get('/api/profile/:id',single_pro)

module.exports = router