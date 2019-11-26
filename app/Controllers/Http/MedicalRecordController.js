'use strict'

const MedicalRecord = use('App/Models/MedicalRecord')


class MedicalRecordController {

  async index () {
    const properties = MedicalRecord.all()
  
    return properties
  }


  async store ({ request, auth }) {
    const { id } = auth.user
    const data = request.only([
    'nome',
    'cpf',
    'dt_nasc',
    'naturalidade',
    'nome_resp',
    'endereco',
    'telefone',
    'email'
  ])

  const property = await MedicalRecord.create({ ...data, user_id: id })

  return property
  }
  

async show ({ params }) {
  const property = await MedicalRecord.findOrFail(params.id)
  await property.load('anamnese')

  return property

}


  async update ({ params, request, response }) {
  const property = await MedicalRecord.findOrFail(params.id)

  const data = request.only([
    'nome',
    'cpf',
    'dt_nasc',
    'naturalidade',
    'nome_resp',
    'endereco',
    'telefone',
    'email'
  ])

  property.merge(data)

  await property.save()

  return property
  }

  async destroy ({ params, auth, response }) {
    const property = await MedicalRecord.findOrFail(params.id)
  
    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await property.delete()
  }
}

module.exports = MedicalRecordController
