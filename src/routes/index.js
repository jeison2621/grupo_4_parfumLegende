const express = require('express');
const router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

/* GET register page. */
router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/register.html'))
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/login.html'))
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/productCart.html'))
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/productDetail.html'))
});
 
module.exports = router;