import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Puerto from '@/components/views/Puerto/Puerto'
import Empresa from '@/components/views/Empresa/Empresa'
import Examen from '@/components/views/Examen/Examen'
import Puertofrm from '@/components/views/Puerto/Puertofrm'
import Postulante from '@/components/views/Postulante/Postulante'
import Postulantefrm from '@/components/views/Postulante/Postulantefrm'
import Categoria from '@/components/views/Categoria/Categoria'
import Categoriafrm from '@/components/views/Categoria/Categoriafrm'
import Subcategoria from '@/components/views/SubCategoria/Subcategoria'
import Subcategoriafrm from '@/components/views/SubCategoria/Subcategoriafrm'
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
        },
        {
          path: '/mantenimientocat/:id?',
          name: 'Categoriafrm',
          component: Categoriafrm
        },
        {
          path: '/categoria',
          name: 'Categoria',
          component: Categoria
        },
        {
          path: '/mantenimientosubcat/:id?',
          name: 'Subcategoriafrm',
          component: Subcategoriafrm
        },
        {
          path: '/subcategoria',
          name: 'Subcateoria',
          component: Subcategoria
        }

      ]
    }
  ]
})
