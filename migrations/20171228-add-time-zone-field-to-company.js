'use strict'

const models = require('../lib/model/db')

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.describeTable('companies').then(function(attributes) {
      if (attributes.hasOwnProperty('timezone')) {
        return 1
      }

      return queryInterface.addColumn(
        'companies',
        'timezone',
        models.Company.attributes.timezone
      )
    })
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('companies', 'timezone')
  }
}
