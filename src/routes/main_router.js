const express = require('express');
const router = express.Router();
const path = require('path'); 
const main_controller = require('../controllers/main_controller'); 

/* GET home page. */
router.get('/', main_controller.home);

/* GET register page. */
router.get('/register', main_controller.register);

/* GET login page. */
router.get('/login', main_controller.login);

/* GET productCart page. */
router.get('/productCart', main_controller.productCart);

/* GET productDetail page. */
router.get('/productDetail', main_controller.productDetail);

/* GET newProducts page. */
router.get('/newProducts', main_controller.newProducts);

module.exports = router;