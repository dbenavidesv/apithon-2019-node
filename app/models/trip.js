'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    'Trip',
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false
      },
      durationTime: {
        type: DataTypes.FLOAT
      }
    },
    {
      underscored: true
    }
  );

  Trip.associate = models => {
    Trip.hasMany(models.Track);
  };

  return Trip;
};
