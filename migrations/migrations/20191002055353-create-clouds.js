'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('clouds', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      town: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }),
  down: queryInterface => queryInterface.dropTable('clouds')
};
