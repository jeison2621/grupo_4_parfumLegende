
const main_controller = { 
    home:(req, res)=>{        
        res.render('index');
    },
    newProducts:(req, res)=>{        
        res.render('newProducts');
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
    }
}

module.exports = main_controller; 
