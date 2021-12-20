const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');

/* GET products page. */
router.get('/register', users_controller.register);

// Métodos en nuestros controladores: index - show - edit - delete 
router.get('/login', controllersUser.login);
router.post('/login', validacionesLogin,controllersUser.ingresar);

router.get('/registro', controllersUser.registro);

//Aqui en esta ruta envio al controlador el avatar del usuario así como las respectivas validaciones

router.post('/registro', upload.single('avatar'),validacionesRegistro, controllersUser.create);

  //Esta es la ruta que se activa al momento que el usuario desea salir de la página
  router.get('/logout', controllersUser.logout);

module.exports = router;