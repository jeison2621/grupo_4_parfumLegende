module.exports = (sequelize, dataTypes) => {

    let alias = "products"

    let config = {
        tableName: "products",
        timestamps: false
    }
    let cols =
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type: dataTypes.STRING,

        },
        description:
        { 
            type: dataTypes.STRING,

        },
        image:
        {
            type: dataTypes.STRING(500),

        },
        category:
        {
            type: dataTypes.STRING,

        },
        amount:
        {
            type: dataTypes.STRING,

        },
        typeAmount:
        {
            type: dataTypes.STRING,
        },
        price:
        {
            type: dataTypes.INTEGER,
        },       
        discount:
        {
            type: dataTypes.INTEGER,

        },

    }

    const Product = sequelize.define(alias, cols, config);


    return Product;
}