const main_controller = { 
    home:(req, res)=>{        
        res.render('index');
    },
    register: (req, res)=>{        
        res.render('register');
    },
    login: (req, res)=>{        
        res.render('login');
    },
    ingresar: (req,res) =>{
        const errors = validationResult(req);
        
        if(errors.isEmpty()){
          let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/users_model.json')));
          let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
          
          //Como podemos modificar nuestros req.body
          delete usuarioLogueado.password;
          req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
          //Aquí voy a guardar las cookies del usuario que se loguea
          /*if(req.body.recordarme){
            res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
          }*/
          return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home - a donde deseen)
  
        }else{
          //Devolver a la vista los errores
          res.render(path.resolve(__dirname, '../views/login'),{errors:errors.mapped(),old:req.body});        
        }
      },
      logout: (req,res) =>{
        req.session.destroy();
        /*res.cookie('email',null,{maxAge: -1});*/
        res.redirect('/');


      }
}

module.exports = main_controller; 