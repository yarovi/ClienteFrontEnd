import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Puerto from '@/components/views/Puerto'
import Empresa from '@/components/views/Empresa'
import Postulante from '@/components/views/Postulante'
import Examen from '@/components/views/Examen'
import Puertofrm from '@/components/views/Puertofrm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/puerto',
          name: 'Puerto',
          component: Puerto
        },
        {
          path: '/crearpuerto/:id?',
          name: 'Puertofrm',
          component: Puertofrm,
          props: true
        },
        /* {
          path: '/editar/:id?',
          name: 'Puertofrm',
          component: Puertofrm
        }, */
        {
          path: '/empresa',
          name: 'Empresa',
          component: Empresa
        },
        {
          path: '/postulante',
          name: 'Postulante',
          component: Postulante
        },
        {
          path: '/examen',
          name: 'Examen',
          component: Examen
        }

      ]
    }
  ]
})
