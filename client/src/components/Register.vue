<template>
  <div class="container" v-if="token!=null || token!=undefined">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Cadastro</h1>
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" v-model="name" class="form-control" name="name" placeholder="Nome">
          </div>
          <div class="form-group">
            <label for="name">Sobrenome</label>
            <input type="text" v-model="surname" class="form-control" name="surname" placeholder="Sobrenome">
          </div>
          <div class="form-group">
            <label for="email">Endereço do email</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Senha">
          </div>
          <div class="form-group">
      <label for="Escolha">Escolha</label>
      <select id="Escolha" v-model="priority" class="form-control" name="priority">
        <option selected>Professor</option>
        <option>Aluno</option>
      </select>
    </div>
            <button type="submit" class="btn btn-lg btn-primary btn-block">Cadastrar!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      priority: '',
      auth: '',
      token: localStorage.usertoken
    }
  },

  methods: {
    register () {
      axios.post('/users',
        {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          priority: true
        }
      ).then((res) => {
        console.log(res)
        console.log('Cadastro Realizado')
      }).catch((err) => {
        console.log(err)
      })
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    },
    mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
  }

}
</script>
