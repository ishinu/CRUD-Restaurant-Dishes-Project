'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FoodsSchema extends Schema {
  up () {
    this.create('foods', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.string('link')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('foods')
  }
}

module.exports = FoodsSchema
