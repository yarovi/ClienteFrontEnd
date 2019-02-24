<template>
  <div>
    <section class="content" id="main">
    <div class="row">
      <div class="col-xs-12">
        <div v-if="nroItem == 0">
          <router-link to="/crearempresa" class="btn btn-block btn-success" >Crear Empresa</router-link>
        </div>
        <!-- <button v-on:click="getall()">pinchame</button> -->
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title"> Datos de la empresa.</h3>
          </div>
          <div class="box-body">
            <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
              <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6"></div>
              </div>
              <div class="row">
                <div v-if="nroItem ==1">
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
                        >Ruc</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Browser: activate to sort column ascending"
                        >Razon Social</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Platform(s): activate to sort column ascending"
                        >Direccion</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Engine version: activate to sort column ascending"
                        >Telefono</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >Correo</th>
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
                      <tr role="row" class="odd" >
                        <td class="sorting_1">{{empresa.ruc}}</td>
                        <td>{{empresa.razonsocial}}</td>
                        <td>{{empresa.direccion}}</td>
                        <td>{{empresa.telefono}}</td>
                        <td>{{empresa.correo}}</td>
                         <td>
                          <router-link v-bind:to="'/crearempresa/'+empresa.id" class="far fa-edit">
                          </router-link>
                          <a class="far fa-trash-alt" href="#" v-on:click="removeItemByID(empresa.id)">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
import axios from 'axios'
export default ({
  data: function () {
    return {
      empresa: [],
      nroItem: 0
    }
  },
  methods: {
    removeItemByID (id) {
      axios.delete('http://localhost:8090/empresa/delete/' + id)
        .then(res => {
          this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se elimino registro con id :' + id + '.')
          this.getinfoEmpresa()
        })
        .catch(er => {
          this.mostrarNotificacion('error', 'Ups encontro un Problema.!', er.response.data.detalle)
        })
    },
    mostrarNotificacion: function (estado, titulo, contenido) {
      this.$notify({
        group: 'foo',
        type: estado,
        title: titulo,
        text: contenido
      })
    },
    getinfoEmpresa: function () {
      axios.get('http://localhost:8090/empresa/getinfoEmpresa')
        .then(res => {
          console.log(res.data)
          this.empresa = res.data
          console.log(res.data.length)
          if (res.data.id === 0) {
            this.nroItem = 0
          } else {
            this.nroItem = 1
          }
        })
        .catch(er => {
          console.log('Error :' + er.response.detalle)
        })
    }
  },
  created () {
    this.getinfoEmpresa()
  }
})
</script>
