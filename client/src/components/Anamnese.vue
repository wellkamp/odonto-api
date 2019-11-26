<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Cadastro</h1>
          <div class="form-group">
            <label for="queixa_principal">Queixa Principal</label>
            <input type="text" v-model="queixa_principal" class="form-control" name="queixa_principal" placeholder="Queixa Princpal">
          </div>
          <div class="form-group">
            <label for="hist_atual_doenca">Historico atual</label>
            <input type="text" v-model="hist_atual_doenca" class="form-control" name="hist_atual_doenca" placeholder="Histórico Atual">
          </div>
          <div class="form-group">
            <label for="antecedentes">Antecedentes</label>
            <input type="text" v-model="antecedentes" class="form-control" name="antecedentes" placeholder="Antecedentes">
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
      queixa_principal: '',
      hist_atual_doenca: '',
      antecedentes: '',
    }
  },

  methods: {
    register () {
      axios.post('/users',
        {
          queixa_principal: this.queixa_principal,
          hist_atual_doenca: this.hist_atual_doenca,
          antecedentes: this.antecedentes
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
