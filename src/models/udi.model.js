const { Model, DataTypes } = require('sequelize');
const DBConnection = require('../db/DBConnection');

class UDI extends Model {}

UDI.init({
    
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true, 
        primaryKey: true, 
    }
    ,
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    dato: {
        type: DataTypes.STRING,
        allowNull: false, 
        defaultValue: 'N/A'
    }

}, {
    // Options
    sequelize: DBConnection,
    modelName: 'udis',
    
});

module.exports = UDI;