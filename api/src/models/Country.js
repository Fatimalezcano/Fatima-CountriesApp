const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    poblacion: {
      type: DataTypes.INTEGER,
    }
  },{
    timestamps: false
  })
  
  sequelize.define('activity', {

    nombre: {
      type: DataTypes.STRING
    },
    dificultad: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5")
    },
    duracion: {
      type: DataTypes.STRING
    },
    temporada: {
      type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera')
    }
    })
};
