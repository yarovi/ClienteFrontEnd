<template>
  <section class="content" id="main">
    <div class="row">
      <div class="col-xs-12">
       <div class="box box-success">
         <div class="box-header with-border">
              <h3 class="box-title">Búsqueda de postulantes</h3>
            </div>
             <div class="box-body">
               <div class="form-group ">
                <div class="row">
                  <label for="Nombre Dispositivo" class="col-sm-2">Tipo</label>
                    <div class="col-sm-2">
                      <select class="form-control" v-model="selector" id="selecttor">
                        <option value="nombre">Nombre y Apellidos</option>
                        <option value="nrodocumento">Nro Documento</option>
                       </select>
                  </div>
                </div>
              </div>
              <div class="form-group ">
                <div class="row">
                  <label for="Nombre Dispositivo" class="col-sm-2">Valor</label>
                    <div class="col-sm-6">
                     <div class="input-group">
                <input type="text" class="form-control" v-model="txtbuscar">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-info" v-on:click="buscarPostulantexParametro()" >Buscar!</button>
                    </span>
              </div>
                  </div>
                </div>
              </div>
             </div>
      </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-xs-12">
        <router-link to="/crearpostulante" class="btn btn-block btn-success">Crear Postulante</router-link>
      </div>
    </div> -->
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Todos los Postulantes.</h3>
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
                        >Nro.Documento</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Platform(s): activate to sort column ascending"
                        >Nombres</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Engine version: activate to sort column ascending"
                        >Edad</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >Sexo</th>
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
                        <td>{{item.nroDocumento}}</td>
                        <td>{{item.nombres}}</td>
                        <td>{{item.edad}}</td>
                        <td>{{item.sexo == 'F' ? 'Femenino':'Masculino'}}</td>
                        <td>
                          <!-- <a class="btn btn-primary" href="#">     </a>                        -->
                          <button class="btn bg-olive btn-flat margin" data-toggle="modal" data-target="#modal-default-palanca" >
                            <i class="far fa-eye"></i>
                            Palanca
                          </button>
                          <button class="btn bg-orange margin" data-toggle="modal" data-target="#modal-default-punteo">
                            <span>Punteo</span>
                            <i class="fab fa-accusoft"></i>
                          </button>
                          <button class="btn bg-purple margin">
                            <span>Pedal</span>
                            <i class="fas fa-address-card"></i>
                          </button>
                          <button class="btn bg-navy margin">
                            <i class="fas fa-file-alt"></i>
                            Reporte
                          </button>
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
                    aria-live="polite">Total: {{pagination.numberOfElements }}</div>
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
    <!-- inicio modal punteado -->
    <div class="modal fade" id="modal-default-punteo" style="display: none;">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Datos</h4>
              </div>
              <div class="modal-body">
                <p>Postulante:</p>
                <input type="hidden" value="1" v-model="tipoExamen">
                 <div class="form-group ">
                    <div class="row">
                      <div class=" form-horizontal">
                        <label for="apaterno" class="col-sm-2">Permanencia</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control" disabled
                        >
                      </div>
                      </div>
                    </div>
                 </div>
                 <div class="form-group ">
                    <div class="row">
                      <div class=" form-horizontal">
                        <label for="apaterno" class="col-sm-2">Aciertos</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control" disabled
                        >
                      </div>
                      </div>
                    </div>
                 </div>
                 <div class="form-group ">
                    <div class="row">
                      <div class=" form-horizontal">
                        <label for="apaterno" class="col-sm-2">Errores</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control" disabled
                        >
                      </div>
                      </div>
                    </div>
                 </div>
                 <div class="form-group ">
                    <b>Aprobado</b>
                    <p>
                      Solo si completa el test en menos de 30 segundos, llegara a los 24 aciertos o permanencia: 4s.
                    </p>
                    <b>Desaprobado</b>
                    <p>
                      Si llega al maximo de errores: 23.
                    </p>
                 </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-warning">Simular</button>
                <button type="button" class="btn btn-success" v-on:click="SimularExamen()">Leer</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
    <!-- fin modal palanca -->
    <div class="modal fade" id="modal-default-palanca" style="display: none;">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Datos</h4>
              </div>
              <div class="modal-body">
                <p>Postulante:</p>
                <input type="hidden" value="1" v-model="tipoExamen">
                 <div class="form-group ">
                    <div class="row">
                      <div class=" form-horizontal">
                        <label for="apaterno" class="col-sm-2">Tiempo</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control" disabled
                        >
                      </div>
                      </div>
                    </div>
                 </div>
                 <div class="form-group ">
                    <div class="row">
                      <div class=" form-horizontal">
                        <label for="apaterno" class="col-sm-2">T. en Errror</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control" disabled
                        >
                      </div>
                      </div>
                    </div>
                 </div>
                 <div class="form-group ">
                    <div class="row">
                      <div class=" form-horizontal">
                        <label for="apaterno" class="col-sm-2">Errores</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control" disabled
                        >
                      </div>
                      </div>
                    </div>
                 </div>
                 <div class="form-group ">
                    <b>Aprobado</b>
                    <p>
                      Solo si completa el test en menos de un minuto.
                    </p>
                    <b>Desaprobado</b>
                    <p>
                      Si llega al maximo de errores: 12 o tiempo en errores:5s.
                    </p>
                 </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-warning">Simular</button>
                <button type="button" class="btn btn-success" v-on:click="SimularExamen()">Leer</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
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
      offset: 3,
      selector: '',
      txtbuscar: '',
      tipoExamen: ''
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
      let params = {tipo: this.selector, valor: this.txtbuscar, page: page}
      axios.get('http://localhost:8090/postulantes/allpostulantetoexamen', { params })
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
    buscarPostulantexParametro () {
      this.getall(0)
    },
    SimularExamen () {

    }
  },
  created: function () {
    this.getall(0)
  }})
</script>
