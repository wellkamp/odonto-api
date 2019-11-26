import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Prontuario from '@/components/Prontuario'
import Anamnese from '@/components/Anamnese'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/prontuario',
      name: 'Prontuario',
      component: Prontuario
    },
    {
      path: '/anamnese',
      name: 'Anamnese',
      component: Anamnese
    }
  ]
})
