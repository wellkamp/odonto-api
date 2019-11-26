'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnamneseSchema extends Schema {
  up () {
    this.create('anamnese', (table) => {
      table.increments()
      table.string('queixa_principal').notNullable()
      table.string('hist_atual_doenca').notNullable()
      table.string('antecedentes').notNullable()
      table.integer('medical_record_id')
        .unsigned()
        .references('id')
        .inTable('medical_records')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('anamnese')
  }
}

module.exports = AnamneseSchema
