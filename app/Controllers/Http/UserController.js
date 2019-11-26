"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["name", "surname", "email", "password", "priority"])

    const user = await User.create(data)

    return user
  }

  async show({ params, response }) {
    const user = await User.find(params.id)
    const res = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      
    }
    return response.json(res)
  }

}

module.exports = UserController