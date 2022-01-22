const express = require('express');
const router = express.Router();
const path  = require('path');
const user_controller = require(path.resolve(__dirname,'../controllers/user_controller'));
const upload = require('../middlewares/multermidd');

const fs = require('fs');
const bcrypt = require('bcryptjs');
const { body } = require('express-validator');

let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/users_model.json')));





//Aquí ejecuto mis validaciones
const validacionesLogin = [
  
    body('email').isEmail().withMessage('Agregar un email válido'),
    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    body('email').custom( (value  ) =>{
      for (let i = 0; i < archivoUsuarios.length; i++) {
          if (archivoUsuarios[i].email == value) {
              return true; 
          }
      }
      return false
    }).withMessage('Usuario no se encuentra registrado...'),
  
    //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
    body('password').custom( (value, {req}) =>{
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == req.body.email) {
                if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
                  return true;
                }else{
                  return false;
                }
            }
        }
        
    }).withMessage('Usuario o contraseña no coinciden'),
]


//Aquí armo las validaciones del Registro
const validacionesRegistro = [
  //Incorporando otras validaciones 
  body('name').isLength({
        min: 1
      }).withMessage('El campo nombre no puede estar vacío'),
    body('lastname').isLength({min: 1
      }).withMessage('El campo apellido no puede estar vacío'),
    body('email').isEmail().withMessage('Agregar un email válido'),

    //Aquí valido el Password   
    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),   
    
    
    //Aquí obligo a que el usuario seleccione su avatar
    body('avatar').custom((value, {req}) =>{
        if(req.file != undefined){
            return true;
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ]




router.get('/registro',(req,res)=>{res.render(path.resolve(__dirname, '../views/usuarios/registro'))});
router.post('/registro',upload.single('avatar'), validacionesRegistro, user_controller.save); 
// de login 
router.get('/login', (req,res)=>{res.render(path.resolve(__dirname, '../views/usuarios/login'))});
router.post('/login', validacionesLogin, user_controller.ingresar);

router.get('/logout', user_controller.logout);




module.exports = router;