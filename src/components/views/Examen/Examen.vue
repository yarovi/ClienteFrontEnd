<template>
  <section class="content" id="main">
    <div class="row">
      <div class="col-xs-12">
       <div class="box box-success">
         <div class="box-header with-border">
              <h3 class="box-title">Búsqueda Exámen</h3>
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
                      <button type="button" class="btn btn-info" v-on:click="buscarExamenxParametro()" >Buscar!</button>
                    </span>
              </div>
                  </div>
                </div>
              </div>
             </div>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <router-link to="/crearexamen" class="btn btn-block btn-success">Crear Examen</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Todos los Examenes.</h3>
          </div>
          <div class="box-body">
            <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
              <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6"></div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <!-- <table
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
                        >A.Paterno</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Engine version: activate to sort column ascending"
                        >A.Materno</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >NroDocumento</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >Direccion</th>
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
                        <td>{{item.nombre}}</td>
                        <td>{{item.apellidopaterno}}</td>
                        <td>{{item.apellidomaterno}}</td>
                        <td>{{item.nrodocumento}}</td>
                        <td>{{item.direccion}}</td>
                        <td>
                          <router-link v-bind:to="'/crearpostulante/'+item.id" class="far fa-edit">
                          </router-link>
                          <a class="far fa-trash-alt" href="#" v-on:click="getremovexid(item.id)">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table> -->
                </div>
              </div>
              <!-- <div class="row">
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
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      selector: '',
      txtbuscar: ''
    }
  },
  methods: {
    buscarExamenxParametro () {
    }
  }
}
</script>
