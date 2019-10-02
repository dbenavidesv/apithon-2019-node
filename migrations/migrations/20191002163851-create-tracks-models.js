/* eslint-disable new-cap */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tracks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      trip_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trips',
          key: 'id'
        },
        allowNull: false
      },
      start_point: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },
      finish_point: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },
      polution_level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      duration_time: {
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('tracks')
};
