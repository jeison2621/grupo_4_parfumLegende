const db = require('../database/models')


const ProductModel = {
    findAll: ()=>{
        return db.Products.findAll()

    }
}


console.log(ProductModel.findAll())