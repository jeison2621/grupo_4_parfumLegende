module.exports = (sequelize, dataTypes) => {

    let alias = "users"

    let config = {
        tableName: "users", // remplazar nombre de la tabla en la db
        timestamps: false
    }
    let column =
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
    
    let columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:               // configuracion de columnas 
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING

        },
        email:
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        password:
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        avatar:{
            type: dataTypes.STRING,
        },
        roles_id:{
            type: dataTypes.STRING,
        }
    }

    const User = sequelize.define(alias, columns, config);


    return User;
}