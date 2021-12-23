const express = require('express');
const router = express.Router();
const path  = require('path')
const user_controller = require('../controllers/user_controller')
const upload = require('../middlewares/multermidd')





router.get('/registro',(req,res)=>{res.render('registro')});
router.post('/registro',upload.single('img'),user_controller.save); 
router.get('/', (req,res)=>{res.render('index')}); 
router.post('/', user_controller.ingresar); 



module.exports = router;