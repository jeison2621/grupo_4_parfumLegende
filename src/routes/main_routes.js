const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path'); 
const main_controller = require('../controllers/main_controller'); 

/* GET home page. */
router.get('/', main_controller.home);

/* GET register page. */
router.get('/register', main_controller.register);

/* GET login page. */
router.get('/login', main_controller.login);

module.exports = router;