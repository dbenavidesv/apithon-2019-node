'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cloud = sequelize.define(
    'Cloud',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      town: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  return Cloud;
};
