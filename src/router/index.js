import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Puerto from '@/components/views/Puerto'
import Empresa from '@/components/views/Empresa'
import Examen from '@/components/views/Examen/Examen'
import Puertofrm from '@/components/views/Puertofrm'
import Postulante from '@/components/views/Postulante/Postulante'
import Postulantefrm from '@/components/views/Postulante/Postulantefrm'
// import '../../static/DatePicker/js/showDatePicker'
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
          path: '/crearpostulante/:id?',
          name: 'Postulantefrm',
          component: Postulantefrm
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
