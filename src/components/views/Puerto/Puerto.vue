<template>
  <section class="content" id="main">
    <div class="row">
      <div class="col-xs-12">
        <router-link to="/crearpuerto" class="btn btn-block btn-success">Crear Dispositivo</router-link>
        <!-- <button v-on:click="getall()">pinchame</button> -->
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Todos los Dispositivos.</h3>
          </div>
          <div class="box-body">
            <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
              <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6"></div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table
                    id="example2"
                    class="table table-bordered table-hover dataTable"
                    role="grid"
                    aria-describedby="example2_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Rendering engine: activate to sort column descending"
                          aria-sort="ascending"
                        >Codigo</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Browser: activate to sort column ascending"
                        >Nombre</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Platform(s): activate to sort column ascending"
                        >Puerto</th>
                        <!-- <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Engine version: activate to sort column ascending"
                        >Estado</th> -->
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" class="odd" v-for="(item,index) in stdata" :key="index">
                        <td class="sorting_1">{{item.id}}</td>
                        <td>{{item.descripcion}}</td>
                        <td>{{item.puerto}}</td>
                        <!-- <td>Activo</td> -->
                        <td>
                          <!-- <a class="btn btn-primary" href="#">     </a>                        -->
                          <router-link v-bind:to="'/crearpuerto/'+item.id" class="far fa-edit">
                          </router-link>
                          <a class="far fa-trash-alt" href="#" v-on:click="getremovexid(item.id)">
                            <!-- <i class="far fa-trash-alt"></i> -->
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <div
                    class="dataTables_info"
                    id="example2_info"
                    role="status"
                    aria-live="polite">Total: {{pagination.numberOfElements}}</div>
                </div>
                <div class="col-sm-7">
                  <nav>
                    <ul class="pagination">
                      <li v-if="pagination.number>0">
                        <a href="#" @click.prevent="changePage(pagination.number -1)">
                          <span>Atras</span></a>
                      </li>
                      <li v-for="(page,index) in pagesNumber" v-bind:key="index" v-bind:class="[page == isActived? 'active' :'']" >
                        <a href="#" @click.prevent="changePage(page-1)">
                          {{ page }}
                        </a>
                      </li>
                      <li v-if="pagination.number < pagination.totalPages-1 ">
                        <a href="#" @click.prevent="changePage(pagination.number +1)">
                          <span>Siguiente</span></a>
                        </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default ({
  data: function () {
    return {
      stdata: [],
      currentPage: 4,
      pagination: [],
      offset: 1
    }
  },
  ready: function () {
    console.log('cargando .....')
  },
  computed: {
    isActived: function () {
      return this.pagination.number
    },
    pagesNumber: function () {
      if (this.pagination.size > this.pagination.numberOfElements) {
        return []
      }
      var from = this.pagination.number - this.offset
      if (from < 1) {
        from = 1
      }
      var to = from + (this.offset * this.offset)
      if (to >= this.pagination.totalPages) {
        to = this.pagination.totalPages
      }
      var pagesArray = []
      while (from <= to) {
        pagesArray.push(from)
        from++
      }
      return pagesArray
    }
  },
  methods: {
    getall (page) {
      // axios.get('http://localhost:8090/dispositivo/all')
      axios.get('http://localhost:8090/dispositivo/findget?page=' + page)
        .then(response => {
          this.stdata = response.data.content
          this.pagination = {
            totalPages: response.data.totalPages,
            totalElements: response.data.totalElements,
            last: response.data.last,
            numberOfElements: response.data.numberOfElements,
            first: response.data.first,
            sort: response.data.sort,
            size: response.data.size,
            number: response.data.number
          }
          console.log(response.data.content)
          console.log(this.pagination)
        })
        .catch(error => {
          console.log(error)
        })
    },
    changePage: function (page) {
      this.pagination.number = page
      this.getall(page)
    },
    getremovexid (id) {
      axios.delete('http://localhost:8090/dispositivo/delete/' + id)
        .then(response => {
          this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se elimino registro con id :' + id + '.')
          this.getall(0)
        })
        .catch(error => {
          this.mostrarNotificacion('error', 'Ups encontro un Problema.!', error.detalle)
        })
    },
    mostrarNotificacion: function (estado, titulo, contenido) {
      this.$notify({
        group: 'foo',
        type: estado,
        title: titulo,
        text: contenido
      })
    }
  },
  created: function () {
    this.getall(0)
  }})
</script>
