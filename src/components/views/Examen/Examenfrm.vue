<template>
<section>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Exámen</h3>
        </div>
          <form action="" class="">
            <div class="box-body ">
              <div class="form-group ">
                <div class="row">
                  <label for="DNI" class="col-sm-2">DNI</label>
                <div class="col-sm-2">
                   <input type="text" class="form-control" id="dnibuscar"  maxlength="8" v-on:keyup="mostrarFiltro($event)"  >
                </div>
                 <div class="col-sm-2">
                   <input type="button" class="btn btn-default" data-toggle="modal"  value="Buscar" data-target="#modal-postulante"  />
                   <input   class="form-control" v-model="examen.Codigopostulante" id="Codigopostulante3" />
                   <!-- @click="buscarPaciente()" -->
                </div>
                </div>
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Apellidos y Completo</label>
                <div class="col-sm-10">
                   <input type="text"
                   class="form-control"
                    id="nombrePostulante"
                    placeholder="Tu nombre" disabled
                    >
                </div>
                </div>
            </div>
            <!-- <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="Donante" class="col-sm-2">Donante</label>
                  <div class="col-sm-4">
                    <select class="form-control"
                    id="donante"
                    v-model="examen.Donante"
                      v-model.trim="$v.examen.Donante.$model"
                    >
                      <option value="S">SI</option>
                      <option value="N">NO</option>
                    </select>
                    <div class="error" v-if="$v.examen.Donante.$error">
                      <li v-if="!$v.examen.Donante.required">Selecione una tipo documento</li>
                    </div>
                  </div>
                <label for="restriccion" class="col-sm-2">Restriccciones</label>
                  <div class="col-sm-4">
                      <select class="form-control"
                                id="coddocumento"
                                v-model="examen.CodRestriccion"
                                v-model.trim="$v.examen.CodRestriccion.$model">
                                  <option v-for="(d,index) in lstrestriccion" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                      </select>
                      <div class="error" v-if="$v.examen.CodRestriccion.$error">
                          <li v-if="!$v.examen.CodRestriccion.required">Selecione una restriccion</li>
                      </div>
                  </div>
              </div>
               </div>
              </div> -->
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="licencia" class="col-sm-2">Licencia</label>
                  <div class="col-sm-4">
                      <select class="form-control"
                                id="codlicencia"
                                v-model="examen.CodLicencia"
                                v-model.trim="$v.examen.CodLicencia.$model">
                                  <option v-for="(d,index) in lstlicencia" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                      </select>
                      <div class="error" v-if="$v.examen.CodLicencia.$error">
                          <li v-if="!$v.examen.CodLicencia.required">Selecione licencia</li>
                      </div>
                  </div>
                <label for="categoria" class="col-sm-2">Categoria</label>
                  <div class="col-sm-4">
                      <select class="form-control"
                                id="codcategoria"
                                v-model="examen.CodCategoria"
                                v-model.trim="$v.examen.CodCategoria.$model">
                                  <option v-for="(d,index) in lstcategoria" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                      </select>
                      <div class="error" v-if="$v.examen.CodCategoria.$error">
                          <li v-if="!$v.examen.CodCategoria.required">Selecione una categoria</li>
                      </div>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="actitud" class="col-sm-2">Actitud</label>
                  <div class="col-sm-4">
                      <select class="form-control"
                                id="codactitud"
                                v-model="examen.CodActitud"
                                v-model.trim="$v.examen.CodActitud.$model">
                                  <option v-for="(d,index) in lstactitud" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                      </select>
                      <div class="error" v-if="$v.examen.CodActitud.$error">
                          <li v-if="!$v.examen.CodActitud.required">Selecione una actitud</li>
                      </div>
                  </div>
                <label for="compotamiento" class="col-sm-2">Comportamiento</label>
                  <div class="col-sm-4">
                      <select class="form-control"
                                id="codcomportamiento"
                                v-model="examen.CodComportamiento"
                                v-model.trim="$v.examen.CodComportamiento.$model">
                                  <option v-for="(d,index) in lstcomportamiento" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                      </select>
                      <div class="error" v-if="$v.examen.CodComportamiento.$error">
                          <li v-if="!$v.examen.CodComportamiento.required">Selecione un comportamiento</li>
                      </div>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
                <div class="row">
                    <div class=" form-horizontal">
                      <label for="enfermedad" class="col-sm-2">Grupo Sanguineo</label>
                          <div class="col-sm-4">
                               <select class="form-control"
                                    id="codcomportamiento"
                                    v-model="examen.CodSangre"
                                    v-model.trim="$v.examen.CodSangre.$model">
                                      <option v-for="(d,index) in lstsangre" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                          </select>
                              <div class="error" v-if="$v.examen.CodSangre.$error">
                                  <li v-if="!$v.examen.CodSangre.required">Selecione un grupo sanguineo</li>
                              </div>
                          </div>
                        <!-- <label for="paisorigen" class="col-sm-2">Grupo Sanguineo</label> -->
                        <!-- <label for="compotamiento" class="col-sm-2">Comportamiento</label> -->
                      <!-- <div class="col-sm-4">
                          <select class="form-control"
                                    id="codcomportamiento"
                                    v-model="examen.CodSangre"
                                    v-model.trim="$v.examen.CodSangre.$model">
                                      <option v-for="(d,index) in lstsangre" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                          </select>
                          <div class="error" v-if="$v.examen.CodSangre.$error">
                              <li v-if="!$v.examen.CodSangre.required">Selecione un grupo sanguineo</li>
                          </div>
                      </div> -->
                    </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="accidente" class="col-sm-2">Accidentes</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="accidente" placeholder="Ingrese Accidente" v-model="examen.Observacion" maxlength="40">
                  </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="defecto" class="col-sm-2">Defectos Corporales</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="defecto" placeholder="Ingrese Defectos" v-model="examen.Defecto" maxlength="40" >
                </div>
                </div>
            </div>
            <!-- <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Exémen Toxicologico</h3>
              </div>
            </div>
            <div class="form-group">
                 <div class="row">
                    <div class="form-horizontal">
                        <label for="direccion" class="col-sm-2">Marihuana</label>
                     <div class="col-sm-2">
                       <div class="radio">
                          <label>
                            <input type="radio" name="optionsRadios" id="optdrogap" value="1" :checked="1 == examen.Droga" >
                          Positivo
                          </label>
                        </div>
                     </div>
                     <div class="col-sm-2">
                       <div class="radio">
                          <label>
                            <input type="radio" name="optionsRadios" id="optdrogan" value="0" :checked="0 == examen.Droga">
                          Negativo
                          </label>
                        </div>
                     </div>
                    </div>
                 </div>
                 <div class="row">
                    <div class="form-horizontal">
                        <label for="direccion" class="col-sm-2">Alcohol</label>
                     <div class="col-sm-2">
                       <div class="radio">
                          <label>
                            <input type="radio" name="optionsRadios2" id="optmariahuanap" value="1" :checked="1 == examen.Marihuana">
                          Positivo
                          </label>
                        </div>
                     </div>
                     <div class="col-sm-2">
                       <div class="radio">
                          <label>
                            <input type="radio" name="optionsRadios2" id="optmariahuanan" value="0" :checked="0 == examen.Marihuana">
                          Negativo
                          </label>
                        </div>
                     </div>
                    </div>
                 </div>
                 <div class="row">
                    <div class="form-horizontal">
                        <label for="direccion" class="col-sm-2">Cocaina</label>
                     <div class="col-sm-2">
                       <div class="radio">
                          <label>
                            <input type="radio" name="optionsRadios3" id="optalcoholp" value="1" :checked="1 == examen.Alcohol">
                          Positivo
                          </label>
                        </div>
                     </div>
                     <div class="col-sm-2">
                       <div class="radio">
                          <label>
                            <input type="radio" name="optionsRadios3" id="optalcoholn" value="0" :checked="0 == examen.Alcohol">
                          Negativo
                          </label>
                        </div>
                     </div>
                    </div>
                 </div>
            </div> -->
            </div>
            <div class="box-footer">
                <button type="button" @click="examencreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/examen" class="btn btn-danger ">Cancelar</router-link>
              </div>
          </form>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
  <!-- modela de busqueda -->
 <div class="modal fade" id="modal-postulante" style="display: none;">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Búsqueda</h4>
              </div>
              <div class="modal-body">
                <div class="box">
                    <div class="box-header">
                        <!-- <h3 class="box-title">Todos Postulantes</h3>
                        <input type="text" v-model="search" class="form-control" /> -->
                    </div>
                    <div class="">
                      <table class="table table-hover" id="tablafiltro">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Paciente</th>
                            <th>Fecha Registro</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(p,index) in pacientes " :key="index" @click="showMensaje(p)">
                              <td>{{p.id}}</td>
                              <td>{{p.nombres}}</td>
                              <td>{{p.fecha}}</td>
                           </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                      </table>
                    </div>
                </div>
               </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal" id="cerrarmodal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="elegirPostuante">Selección</button>
              </div>
            </div>
          </div>
        </div>
  <!-- fin de la busqueda -->
</section>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
  data: function () {
    return {
      examen: {
        Id: '',
        Codigopostulante: '',
        // Donante: '',
        // CodRestriccion: '',
        // CodPostulante: '',
        CodLicencia: '',
        CodCategoria: '',
        CodActitud: '',
        CodComportamiento: '',
        // CodEnfermedad: '',
        CodSangre: '',
        Observacion: '',
        Defecto: ''
        // Defecto: '',
        // Droga: '',
        // Marihuana: '',
        // Alcohol: '',
        // Estado: ''
      },
      selected: [],
      // sortKey: '',
      // reverse: false,
      lstlicencia: {},
      lstactitud: {},
      lstenfermedad: {},
      lstrestriccion: {},
      lstcategoria: {},
      lstcomportamiento: {},
      lstsangre: {},
      pacientes: {}
    }
  },
  validations: {
    examen: {
      CodLicencia: {
        required
      },
      CodCategoria: {
        required
      },
      CodActitud: {
        required
      },
      CodComportamiento: {
        required
      },
      CodSangre: {
        required
      }
    }
  },
  methods: {
    sortBy: function (sortKey) {
      this.reverse = (this.sortKey === sortKey) ? !this.reverse : false
      this.sortKey = sortKey
    },
    examencreate () {
      if (this.ejecutarValidacion() === true) {
        console.log('dato..... ' + this.examen.id)
        if (this.examen.id > 0) {
          console.log('llamando para actualizar..... x)')
          this.postulanteupdate()
        } else {
          axios.post('/examen/create',
            {
              codpostulate: this.examen.Codigopostulante,
              codlicencia: this.examen.CodLicencia,
              codcategoria: this.examen.CodCategoria,
              codactitud: this.examen.CodActitud,
              codcomportamiento: this.examen.CodComportamiento,
              codsangre: this.examen.CodSangre,
              observacion: this.examen.Observacion,
              defecto: this.examen.Defecto
            })
            .then(response => {
              console.log(response.data)
              this.$router.push('/examen')
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },
    ejecutarValidacion: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        return false
      } else {
        return true
        // alert('todo bien.')
      }
    },
    mostrarFiltro (e) {
      console.log(e.key)
      let clave = e.key
      if (clave === 'F2') {
        console.log('abre mierda')
      }
    },
    buscarPaciente () {
      // alert ('buscando')
      axios.get('/postulantes/allpostulante')
        .then(response => {
          this.pacientes = response.data
          this.cargarJquery()
          console.log(this.pacientes)
        })
        .catch(error => {
          console.log(error)
        })
    },
    cargarJquery () {
      const plugin = document.createElement('script')
      plugin.setAttribute(
        'src',
        '../../../../static/tabla/js/tabla.js'
      )
      plugin.async = true
      document.head.appendChild(plugin)
    },
    showMensaje (item) {
      // alert('hola' + item.nombres)
      this.selected = item
      // let btnClose = document.getElementById('')

      this.examen.Codigopostulante = item.id
      document.getElementById('nombrePostulante').value = item.nombres
      document.getElementById('cerrarmodal').click()
      // }
    }
  },
  mounted: function () {
    // Esta funcion inicializa los datos de los controles
    axios.get('/tipo/allinfoexamen')
      .then(response => {
        this.lstlicencia = response.data.licencia
        this.lstactitud = response.data.actitud
        this.lstrestriccion = response.data.restriccion
        this.lstcategoria = response.data.categoria
        this.lstcomportamiento = response.data.comportamiento
        this.lstenfermedad = response.data.enfermedad
        this.lstsangre = response.data.sangre
        // customMudle.aludando()
      })
      .catch(error => {
        console.log(error)
      })
    document.getElementById('dnibuscar').focus()
    this.buscarPaciente()
  }
}
</script>
