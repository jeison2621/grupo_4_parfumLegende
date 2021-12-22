const express = require('express');
const router = express.Router();
const path  = require('path')
const user_controller = require('../controllers/user_controller')
//const user_controller2 = require(path.resolve(__dirname, '../controllers/user_controller'));





router.get('/registro',(req,res)=>{res.render('registro')});
router.post('/registro',user_controller.otra)



module.exports = router;