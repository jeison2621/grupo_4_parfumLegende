const express = require('express');
const router = express.Router();
const products_controller = require('../controllers/products_controller');

/* GET products page. */
router.get('/', products_controller.products);

/* GET products page. */
router.get('/detail/:id', products_controller.productDetail);

/* GET productCart page. */
router.get('/cart', products_controller.productCart);

module.exports = router;