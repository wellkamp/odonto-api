<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="email">
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="senha">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      axios.post('/users/sessions',
        {
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        localStorage.setItem('usertoken', res.data.token)
        this.email = ''
        this.password = ''
        router.push({ name: 'Profile' })
        this.emitMethod()
      }).catch((err) => {
        console.log(err)
      })
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>
