module.exports = (sequelize, dataTypes) =>{

    let alias = "users"

    let config = {
        tableName: "db_perfumes", 
        timestamps: false
    }
    let columns =
    {
    id: {
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
    nombre:
        {
            type: dataTypes.STRING,

        },		
    apellido:
        {
            type: dataTypes.STRING
        },
    edad:
        {
            type: dataTypes.INTEGER
        },
    genero:
        {
            type: dataTypes.INTEGER
        },
    tipo:
        {
            type: dataTypes.INTEGER 
        },
    email:
        {
            type: dataTypes.STRING
        },
    password:
        {
            type: dataTypes.STRING 
        } 
}

    const User = sequelize.define(alias, columns, config);


    return User;
}