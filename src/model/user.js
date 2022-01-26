const db = require('../database/models')


const UserModel = {
    findAll: ()=>{
      return db.users.findAll()
},
}

console.log(UserModel.findAll())


//module.exports = UserModel
