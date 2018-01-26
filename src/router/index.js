import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/login'
import Zhuce from '../views/login/zhuce'
import Mima from '../views/login/mima'
import Mima2 from '../views/login/mima2'
import Mima3 from '../views/login/mima3'
import Qidong from '../views/login/qidong'
import Start from '../views/start/start'
import Main from '../views/main/main'
import Password from '../views/password/password'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	redirect:'/login'
    },{
    	
    path:'/login',
    component: Login
    	
    },{
    	
    path:'/start',
    component: Start
    	
    },
    {
    	
    path:'/main',
    component: Main
    	
    },
    {
    	
    path:'/password',
    component: Password
    	
    },
     {
    	
    path:'/zhuce',
    component: Zhuce
    	
    },
     {
    	
    path:'/mima',
    component: Mima
    	
    },
      {
    	
    path:'/mima2',
    component: Mima2
    	
    },
    {
    	
    path:'/mima3',
    component: Mima3
    	
    },
    {
    	
    path:'/qidong',
    component: Qidong
    	
    }
  ]
})
