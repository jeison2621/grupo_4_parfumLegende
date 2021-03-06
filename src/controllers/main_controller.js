const model = require('../model')

const main_controller = { 
    home:(req,res,next)=>{
        model.product.findAll().then(item=>{
            res.render('index', {  data: item })
        })
        .catch(err => next(err))
    },
    register: (req, res)=>{        
        res.render('register');
    },
    login: (req, res)=>{        
        res.render('login');
    },
    prueba:(req, res)=>{        
      res.render('index');
  }
}

module.exports = main_controller; 