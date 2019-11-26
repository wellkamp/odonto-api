'use strict'

const Anamnese = use('App/Models/Anamnese')


class AnamneseController {
  
  async store ({ request, auth }) {
    const { id } = auth.user
    const data = request.only([
      'queixa_principal',
      'hist_atual_doenca',
      'antecedentes',
  ])

  const property = await Anamnese.create({ ...data, medical_record_id: id })

  return property
  }

  async update ({ params, request, response }) {
    const property = await Anamnese.findOrFail(params.id)
  
    const data = request.only([
      'queixa_principal',
      'hist_atual_doenca',
      'antecedentes',
    ])
  
    property.merge(data)
  
    await property.save()
  
    return property
    }

  async destroy ({ params, auth, response }) {
    const property = await Anamnese.findOrFail(params.id)
  
    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await property.delete()
  }
}

module.exports = AnamneseController
