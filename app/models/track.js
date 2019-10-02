/* eslint-disable new-cap */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define(
    'Track',
    {
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      startPoint: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE)
      },
      finishPoint: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE)
      },
      polutionLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      durationTime: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  Track.associate = models => {
    Track.belongsTo(models.Trip, { foreignKey: 'tripId' });
  };

  return Track;
};
