const express = require('express');
const router = express.Router();
const path = require('path'); 
const products_controller = require('../controllers/products_controller'); 

/* GET productCart page. */
router.get('/cart', products_controller.productCart);

/* GET productDetail page. */
router.get('/detail', products_controller.productDetail);

/* GET newProducts page. */
router.get('/new', products_controller.newProducts);

/* GET editProducts page. */
router.get('/edit', products_controller.editProducts);

module.exports = router;