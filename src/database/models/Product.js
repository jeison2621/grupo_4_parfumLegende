module.sports = (sequelize, dataTypes) => {

    let alias = "Products"

    let config = {
        	        tableName: "db_perfumes",
        	        timestamps: false
    		     }
    let cols =
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
    categoria:
        {
            type: dataTypes.STRING 
        },
    marca:
        {
            type: dataTypes.INTEGER
        },
    descripcion:
        {
            type: dataTypes.STRING
        },
    precio:
        {
            type: dataTypes.INTEGER 
        },
    descuento:
        {
            type: dataTypes.INTEGER
        }
}

    const Product = sequelize.define(alias, cols, config);


    return Product;
}