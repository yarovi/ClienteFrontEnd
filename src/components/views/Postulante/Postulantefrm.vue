<template>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Postulantes</h3>
        </div>
          <form action="" class="">
            <div class="box-body ">
              <div class="form-group ">
                  <div class="row">
                    <label for="Nombre Dispositivo" class="col-sm-2">Código</label>
                  <div class="col-sm-2">
                    <input type="text" class="form-control" id="id"  v-model="postulante.id" disabled>
                  </div>
                  </div>
                </div>
              <div class="form-group">
                <div class="row">
                    <div class=" form-horizontal">
                    <label for="apaterno" class="col-sm-2">A. Paterno</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control"
                        id="apellidopaterno"
                        placeholder="Ingrese A. Paterno"
                        v-model="postulante.ApellidoPaterno"
                        v-model.trim="$v.postulante.ApellidoPaterno.$model" maxlength="20">
                        <div class="error" v-if="$v.postulante.ApellidoPaterno.$error">
                          <li v-if="!$v.postulante.ApellidoPaterno.required">Rellene este campo</li>
                        </div>
                      </div>
                      <label for="amaterno" class="col-sm-2">A. Materno</label>
                      <div class="col-sm-4">
                        <input type="text"
                        class="form-control"
                        id="apellidomaterno"
                        placeholder="Ingrese A. Materno"
                        v-model="postulante.ApellidoMaterno"
                        v-model.trim="$v.postulante.ApellidoMaterno.$model" maxlength="20">
                          <div class="error" v-if="$v.postulante.ApellidoMaterno.$error">
                            <li v-if="!$v.postulante.ApellidoMaterno.required">Rellene este campo</li>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Nombre Completo</label>
                  <div class="col-sm-10">
                    <input type="text"
                    class="form-control"
                      id="nombre"
                      placeholder="Tu nombre"
                      v-model="postulante.Nombre"
                      v-model.trim="$v.postulante.Nombre.$model" maxlength="30">
                      <div class="error" v-if="$v.postulante.Nombre.$error">
                        <li v-if="!$v.postulante.Nombre.required">Rellene este campo</li>
                    </div>
                  </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class=" form-horizontal">
                      <label for="Nombre Dispositivo" class="col-sm-2">Tipo Documento</label>
                        <div class="col-sm-4">
                            <select class="form-control"
                                id="coddocumento"
                                v-model="postulante.CodDocumento"
                                v-model.trim="$v.postulante.CodDocumento.$model">
                                  <option v-for="(d,index) in listaDocumentos" :key="index"  :value="d.id" >{{d.descripcion}}</option>
                              </select>
                              <div class="error" v-if="$v.postulante.CodDocumento.$error">
                                <li v-if="!$v.postulante.CodDocumento.required">Selecione una tipo documento</li>
                              </div>
                        </div>
                          <label for="nrodocumento" class="col-sm-2">Nro Documento</label>
                            <div class="col-sm-4">
                              <input type="text"
                              class="form-control"
                              id="nrodocumento"
                              placeholder="Nro de Documento"
                              v-model="postulante.NroDocumento"
                              v-model.trim="$v.postulante.NroDocumento.$model" maxlength="10" >
                                <div class="error" v-if="$v.postulante.NroDocumento.$error">
                                  <li v-if="!$v.postulante.NroDocumento.required">Ingrese un documento</li>
                                </div>
                            </div>

                    </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                    <div class=" form-horizontal">
                      <label for="fechanacimiento" class="col-sm-2">Fecha Nacimiento</label>
                        <div class="col-sm-4">
                          <div class="input-group date">
                            <div class="input-group-addon">
                              <i class="fa fa-calendar"></i>
                            </div>
                            <input type="date"
                            class="form-control pull-right"
                            id="fechanacimiento"
                            v-model="postulante.FechaNacimiento"
                            v-model.trim="$v.postulante.FechaNacimiento.$model" v-on:blur="calcularEdad($event)" >
                            <div class="error" v-if="$v.postulante.FechaNacimiento.$error">
                            <li v-if="!$v.postulante.FechaNacimiento.required" >Ingrese una fecha </li>
                        </div>
                          </div>
                        </div>
                      <label for="edad" class="col-sm-2">Edad</label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control" id="edad" placeholder="Edad" v-model="postulante.Edad" disabled>
                        </div>
                    </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                    <div class=" form-horizontal">
                  <label for="sexo" class="col-sm-2">Sexo</label>
                    <div class="col-sm-4">
                      <select
                      class="form-control"
                      id="sexo"
                      v-model="postulante.Sexo"
                      v-model.trim="$v.postulante.Sexo.$model" >
                        <option value="M">MASCULINO</option>
                        <option value="F">FEMENINO</option>
                      </select>
                      <div class="error" v-if="$v.postulante.Sexo.$error">
                        <li v-if="!$v.postulante.Sexo.required">seleccione sexo</li>
                      </div>
                    </div>
                  <label for="niveleducacion" class="col-sm-2">Nivel Educación</label>
                    <div class="col-sm-4">
                      <select
                      class="form-control"
                      id="grado"
                      v-model="postulante.CodGrado"
                      v-model.trim="$v.postulante.CodGrado.$model">
                        <option v-for="(grado,index) in listaGrado" :key="index" :value="grado.id">{{grado.descripcion}}</option>
                      </select>
                      <div class="error" v-if="$v.postulante.CodGrado.$error">
                        <li v-if="!$v.postulante.CodGrado.required">seleccione un grado</li>
                      </div>
                    </div>
                </div>
                </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="estadocivil" class="col-sm-2">Estado Civil</label>
                  <div class="col-sm-4">
                    <select class="form-control"
                    id="estadocivil"
                    v-model="postulante.CodEstadoCivil"
                    v-model.trim="$v.postulante.CodEstadoCivil.$model">
                      <option v-for="(civil,index) in listaEstadoCivil" :key="index" :value="civil.id">{{civil.descripcion}}</option>
                    </select>
                    <div class="error"
                         v-if="$v.postulante.CodEstadoCivil.$error">
                      <li v-if="!$v.postulante.CodEstadoCivil.required">seleccione estado civil</li>
                    </div>
                  </div>
                <label for="paisorigen" class="col-sm-2">País Origen</label>
                  <div class="col-sm-4">
                    <select
                    class="form-control"
                    id="codpais"
                    v-model="postulante.CodigoPais"
                    v-model.trim="$v.postulante.CodigoPais.$model">
                      <option  v-for="(pais,index) in listaPais" :key="index" :value="pais.id">{{pais.descripcion}}</option>
                    </select>
                    <div class="error" v-if="$v.postulante.CodigoPais.$error">
                      <li v-if="!$v.postulante.CodigoPais.required">seleccione país</li>
                    </div>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
                <div class="row">
                    <div class=" form-horizontal">
                      <label for="telefono" class="col-sm-2">Teléfono</label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control" id="telefono" placeholder="Ingrese Telefono" v-model="postulante.Telefono" maxlength="9">
                        </div>
                        <label for="paisorigen" class="col-sm-2">Ocupación</label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control" id="ocupacion" placeholder="Ingrese Ocupación" v-model="postulante.Ocupacion" maxlength="12" >
                        </div>
                    </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="direccion" class="col-sm-2" >Dirección</label>
                <div class="col-sm-10">
                   <input type="text"
                   class="form-control"
                   id="direccion"
                   placeholder="Tu direccion donde vive"
                    v-model="postulante.Direccion"
                    v-model.trim="$v.postulante.Direccion.$model" maxlength="40">
                   <div class="error" v-if="$v.postulante.Direccion.$error" >
                      <li v-if="!$v.postulante.Direccion.required">ingrese una dirección</li>
                    </div>
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="correo" class="col-sm-2">Correo Electrónico</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="correo" placeholder="Tu ejemplo@empresa.com" v-model="postulante.Correo" maxlength="30">
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="observacion" class="col-sm-2">Observación</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="observacion" placeholder="Observaciones" v-model="postulante.Observacion" maxlength="40">
                </div>
                </div>
            </div>
            </div>
            <div class="box-footer">
                <button type="button" @click="postulantecreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/postulante" class="btn btn-danger ">Cancelar</router-link>
              </div>
          </form>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
import axios from 'axios'
import moment from 'moment'
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      postulante: {
        id: '0',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        Nombre: '',
        CodDocumento: '',
        NroDocumento: '',
        FechaNacimiento: moment().format('YYYY-MM-DD'),
        Edad: '',
        Sexo: '',
        CodGrado: '',
        CodEstadoCivil: '',
        CodigoPais: '',
        Telefono: '',
        Ocupacion: '',
        Direccion: '',
        Correo: '',
        Observacion: ''
      },
      listaGrado: {},
      listaDocumentos: {},
      listaEstadoCivil: {},
      listaPais: {}
    }
  },
  validations: {
    postulante: {
      ApellidoPaterno: {
        required
      },
      ApellidoMaterno: {
        required
      },
      Nombre: {
        required
      },
      CodDocumento: {
        required
      },
      NroDocumento: {
        required
      },
      FechaNacimiento: {
        required
      },
      Sexo: {
        required
      },
      CodGrado: {
        required
      },
      CodEstadoCivil: {
        required
      },
      CodigoPais: {
        required
      },
      Direccion: {
        required
      }
    }
  },
  methods: {
    postulantecreate () {
      if (this.ejecutarValidacion() === true) {
        console.log('dato..... ' + this.postulante.id)
        if (this.postulante.id > 0) {
          console.log('llamando para actualizar..... x)')
          this.postulanteupdate()
        } else {
          console.log('valor  ------------------------' + this.postulante.CodDocumento)
          axios.post('/postulantes/postulante',
            {
              apellidopaterno: this.postulante.ApellidoPaterno,
              apellidomaterno: this.postulante.ApellidoMaterno,
              nombre: this.postulante.Nombre,
              coddocumento: this.postulante.CodDocumento,
              nrodocumento: this.postulante.NroDocumento,
              fechanacimiento: this.postulante.FechaNacimiento,
              edad: this.postulante.Edad,
              sexo: this.postulante.Sexo,
              codgrado: this.postulante.CodGrado,
              codestadocivil: this.postulante.CodEstadoCivil,
              codpais: this.postulante.CodigoPais,
              direccion: this.postulante.Direccion,
              correo: this.postulante.Correo,
              observacion: this.postulante.Observacion,
              telefono: this.postulante.Telefono,
              ocupacion: this.postulante.Ocupacion
            })
            .then(response => {
              console.log(response.data)
              this.$router.push('/postulante')
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },
    postulantegetxid () {
      axios.get('/postulantes/getid/' + this.id)
        .then(response => {
          console.log(response.data)
          this.postulante.id = response.data.id
          this.postulante.ApellidoPaterno = response.data.apellidopaterno
          this.postulante.ApellidoMaterno = response.data.apellidomaterno
          this.postulante.Nombre = response.data.nombre
          this.postulante.CodDocumento = response.data.coddocumento
          this.postulante.NroDocumento = response.data.nrodocumento
          this.postulante.FechaNacimiento = response.data.fechanacimiento
          this.postulante.Edad = response.data.edad
          this.postulante.Sexo = response.data.sexo
          this.postulante.CodGrado = response.data.codgrado
          this.postulante.CodEstadoCivil = response.data.codestadocivil
          this.postulante.CodigoPais = response.data.codpais
          this.postulante.Direccion = response.data.direccion
          this.postulante.Correo = response.data.correo
          this.postulante.Observacion = response.data.observacion
          this.postulante.Telefono = response.data.telefono
          this.postulante.Ocupacion = response.data.ocupacion
        })
        .catch(error => {
          console.log(error)
        })
    },
    postulanteupdate () {
      axios.put('/postulantes/update/' + this.id,
        { id: this.postulante.id,
          apellidopaterno: this.postulante.ApellidoPaterno,
          apellidomaterno: this.postulante.ApellidoMaterno,
          nombre: this.postulante.Nombre,
          coddocumento: this.postulante.CodDocumento,
          nrodocumento: this.postulante.NroDocumento,
          fechanacimiento: this.postulante.FechaNacimiento,
          edad: this.postulante.Edad,
          sexo: this.postulante.Sexo,
          codgrado: this.postulante.CodGrado,
          codestadocivil: this.postulante.CodEstadoCivil,
          codpais: this.postulante.CodigoPais,
          direccion: this.postulante.Direccion,
          correo: this.postulante.Correo,
          observacion: this.postulante.Observacion,
          telefono: this.postulante.Telefono,
          ocupacion: this.postulante.Ocupacion})
        .then(response => {
          console.log(response.data)
          this.$router.push('/postulante')
        })
        .catch(error => {
          console.log(error)
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
    calcularEdad: function (e) {
      // alert('ijij' + e.target.value)
      var fechaElegida = moment(e.target.value)
      var fechaHoy = moment()
      var d = fechaHoy.diff(fechaElegida, 'years')
      this.postulante.Edad = d
      // alert('edad : ' + d)
    }
  },
  mounted: function () {
    // Esta funcion inicializa los datos de los controles
    axios.get('/tipo/allinfopostulante')
      .then(response => {
        this.listaPais = response.data.paises
        this.listaGrado = response.data.grado
        this.listaEstadoCivil = response.data.estadocivil
        this.listaDocumentos = response.data.identificacion
        console.log(this.listaDocumentos)
      })
      .catch(error => {
        console.log(error)
      })
  },
  created: function () {
    if (this.id !== undefined) {
      console.log('Actualizando el valor de if..... x)' + this.id)
      this.postulantegetxid()
    } else {
      console.log('Nuevo..... x)')
    }
  }
}
// nota
// keyup.enter
</script>
