const express = require('express');
const router = express.Router();    

const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserController = require('../controller/user.controller');
const verifyToken = require('../middlewares/auth');
const cookieParser = require('cookie-parser');

router.post('/register', UserController.postUser)

router.post('/sign' , UserController.sign)

router.put("/verify/:token" , UserController.verifyEmail)

router.get('/all', UserController.getAllUsers)

router.get('/:id', UserController.getUser)

router.delete('/delete/:id', UserController.deleteUser)

router.put('/update/:id', UserController.updateUser)


module.exports = router;