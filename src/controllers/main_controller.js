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
    productCart: (req, res)=>{        
        res.render('productCart');
    },    
    productDetail: (req, res)=>{        
        res.render('productDetail');
    },
    newProducts: (req, res)=>{        
        res.render('newProducts');
    },
    editProducts: (req, res)=>{        
        res.render('editProducts');
    },
}

module.exports = main_controller; 