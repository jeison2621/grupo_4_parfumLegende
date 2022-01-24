const express = require('express');
const router = express.Router();
const multer = require('multer')
const admin_controller = require('../controllers/admin_controller'); 
const upload = require('../middlewares/multermiddproduct');

//ADMIN
router.get('/', admin_controller.admin);

router.get('/create', admin_controller.create);
router.post('/create', upload.single('image_new_product'), admin_controller.save);

router.get('/editdetail/:id', admin_controller.show);

router.get('/edit/:id', admin_controller.edit);
router.put('/edit/:id', admin_controller.update);

router.get('/delete/:id', admin_controller.destroy);

module.exports = router;
