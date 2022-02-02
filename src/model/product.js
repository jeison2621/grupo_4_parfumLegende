const db = require('../database/models')

const productsModel = {

    findAll:()=>{
        return db.products  // nombre de la tabla en da db
                   .findAll()
                   .then((item)=>item)
                   //.then((item)=>console.log(item))
                   .catch(err => console.error(err))
         
     },
     findOne:(id)=>{
       return  db.products
                 .findByPk(id)
                 //.then((item)=>item)
                 .then((item)=>console.log(item))
                 .catch(err => console.error(err))
         
         
     }, 
     create:(usuario)=>{
       return  db.products.create(usuario)
             .then((item)=>item)
             .catch(err => console.error(err))
 
 
         
     },
     update:(usuario, id)=>{
       return  db.products.update(usuario,{
             where:{
                 id: id
             }})
             .then((item)=>item)
             .catch(err => console.error(err))
         
     },
     delete:(id)=>{
         return  db.products.destroy({
             where:{
                 id: id
             }})
 
             .then((item)=>item)
             .catch(err => console.error(err))
         
     
     },
 }

 productsModel.findAll() 

module.exports =  productsModel 