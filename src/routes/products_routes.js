const express = require('express');
const router = express.Router();
const path = require('path'); 
const products_controller = require('../controllers/products_controller'); 

/* GET products page. */
router.get('/', products_controller.products);

/* GET products page. */
router.get('/detail/:id', products_controller.productDetail);

/* GET productCart page. */
router.get('/cart', products_controller.productCart);

/* GET newProducts page. */
router.get('/create', products_controller.newProducts);

/* GET editProducts page. */
router.get('/edit', products_controller.editProducts);

module.exports = router;