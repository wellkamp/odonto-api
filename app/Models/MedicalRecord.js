'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MedicalRecord extends Model {

    user () {
        return this.belongsTo('App/Models/User')
      }
    
    anamnese () {
        return this.hasOne('App/Models/Anamnese')
    }
}

module.exports = MedicalRecord
