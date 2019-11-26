'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicalRecordSchema extends Schema {
  up () {
    this.create('medical_records', (table) => {
      table.increments()
      table.string('nome').notNullable().unique()
      table.string('cpf').notNullable().unique()
      table.string('dt_nasc').notNullable()
      table.string('naturalidade').notNullable()
      table.string('nome_resp').notNullable()
      table.string('endereco').notNullable()
      table.string('telefone').notNullable()
      table.string('email').notNullable().unique()
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('medical_records')
  }
}

module.exports = MedicalRecordSchema
