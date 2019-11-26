<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Perfil</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Nome</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>Sobrenome</td>
            <td>{{surname}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
          <tr>
            <td>Tipo de usuario</td>
            <td>{{priority}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      uid: decoded.uid,
      name: '',
      surname: '',
      email: '',
      priority: ''
    }
  },
  mounted () {
    axios.get(`/users/getuser/${this.uid}`
    ).then((res) => {
      this.name = res.data.name
      this.surname = res.data.surname
      this.email = res.data.email
      this.priority = res.data.priority
      if (this.priority === true) {
        this.priority = 'Professor'
      } else {
        this.priority = 'Aluno'
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
