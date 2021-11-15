const products_controller = { 
    newProducts:(req, res)=>{        
        res.render('newProducts');
    },
    editProducts:(req, res)=>{        
        res.render('editProducts');
    }, 
    productCart: (req, res)=>{        
        res.render('productCart');
    },    
    productDetail: (req, res)=>{        
        res.render('productDetail');
    }
}

module.exports = products_controller; 