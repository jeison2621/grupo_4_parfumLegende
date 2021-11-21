const fs = require('fs')
const path = require('path');
const { param } = require('../routes/products_routes');

const allProducts = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json'), 'utf-8'))

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
        let id = req.params.id;
        let productDetail = allProducts.filter(product => product.id == id);
        res.render('productDetail', { productDetail } );
    },
    products: (req, res) => {
        res.render('products', { allProducts } );
    }
}

module.exports = products_controller;