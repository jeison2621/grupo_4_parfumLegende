const db = require('../database/models')

const usersModel = { 

    findAll:()=>{
       return db.users  
                  .findAll()
                  .then((item)=>item)
                  //.then((item)=>console.log(item))
                  .catch(err => console.error(err))
        
    },
    findOne:(id)=>{
      return  db.users
                .findByPk(id)
                .then((item)=>item)
                //.then((item)=>console.log(item))
                .catch(err => console.error(err))
        
        
    }, 
    create:(usuario)=>{
      return  db.users.create(usuario)
            .then((item)=>item)
            .catch(err => console.error(err))


        
    },
    update:(usuario, id)=>{
      return  db.users.update(usuario,{
            where:{
                id: id
            }})
            .then((item)=>item)
            .catch(err => console.error(err))
        
    },
    delete:(id)=>{
        return  db.users.destroy({
            where:{
                id: id
            }})

            .then((item)=>item)
            .catch(err => console.error(err))
        
    
    }, 
}
// probando los metodos de userModelOld

//1-usersModelOld.findAll() 
usersModel.findAll() 

//2-usersModelOld.findOne(2) asi consultamos un usuario por id de nuestra db
//usersModel.findOne(6)
 //3- asi insertamos los datos en nuestra db  los campos deben ser identicos unciona ok 
// usersModel.create(
//      {
//       name: "camilo",
//       lastname: "diaz",
//       email: "cam@gmail.com",
//       password: "$2a$10$FONH9LR5u89WUV",
//       roles_id: "1",
//       avatar: "foto-1643649150708.jpg"
//      }
//  ) 

// 3- asi actualizamos los datos en nuestra db  funciona, igual al create y me le envia el id (en este caso 3 linea 58)
// usersModelOld.update({
//     name: 'juana',
//     email: 'juana2328@gmail.com',
//     password: '123459'
// },3)


 // 4- usersModelOld.delete(3)   asi borramos un registro de la db
module.exports = usersModel
