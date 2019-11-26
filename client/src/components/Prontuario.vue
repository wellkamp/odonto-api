<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Cadastro Prontuario</h1>
          <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" v-model="nome" class="form-control" name="nome" placeholder="Nome">
          </div>

          <div class="form-group">
            <label for="cpf">CPF</label>
            <input type="text" v-model="cpf" class="form-control" name="cpf" placeholder="cpf">
          </div>

          <div class="form-group">
            <label for="dt_nasc">Data Nascimento</label>
            <input type="text" v-model="dt_nasc" class="form-control" name="dt_nasc" placeholder="Data Nascimento">
          </div>

          <div class="form-group">
            <label for="naturalidade">Naturalidade</label>
            <input type="text" v-model="naturalidade" class="form-control" name="naturalidade" placeholder="naturalidade">
          </div>

          <div class="form-group">
            <label for="nome_resp">Nome Responsavel</label>
            <input type="text" v-model="nome_resp" class="form-control" name="nome_resp" placeholder="Nome Responsavel">
          </div>

          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input type="text" v-model="endereco" class="form-control" name="endereco" placeholder="Endereço">
          </div>

          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input type="text" v-model="telefone" class="form-control" name="telefone" placeholder="telefone">
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Email">
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
      nome: '',
      cpf: '',
      dt_nasc: '',
      naturalidade: '',
      nome_resp: '',
      endereco: '',
      telefone: '',
      email: '',
      auth: '',
    }
  },

  methods: {
    register () {
      axios.post('users/medical-records',
        {
          nome: this.name,
          cpf: this.surname,
          dt_nasc: this.dt_nasc,
          naturalidade: this.naturalidade,
          nome_resp: this.nome_resp,
          endereco: this.endereco,
          telefone: this.telefone,
          email: this.email,
          auth: this.token
        }
      ).then((res) => {
        console.log(res)
        router.push({ name: 'Login' })
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

<style scoped>
</style>
