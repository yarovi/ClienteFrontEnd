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
                  <label for="Nombre Dispositivo" class="col-sm-2">Codigo</label>
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
                  <input type="text" class="form-control" id="apellidopaterno" placeholder="Ingrese A. Paterno" v-model="postulante.ApellidoPaterno" >
                </div>
                <label for="amaterno" class="col-sm-2">A. Materno</label>
                <div class="col-sm-4">
                 <input type="text" class="form-control" id="apellidomaterno" placeholder="Ingrese A. Materno" v-model="postulante.ApellidoMaterno" >
                </div>
              </div>
               </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Nombre Completo</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="nombre" placeholder="Tu nombre" v-model="postulante.Nombre">
                </div>
                </div>
            </div>
            <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="Nombre Dispositivo" class="col-sm-2">Tipo Documento</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.CodDocumento" id="coddocumento">
                      <option v-for="(doc,index) in listaDocumentos" :key="index"  :value="doc.tipoid">{{doc.descripcion }}</option>
                    </select>
                  </div>
                <label for="nrodocumento" class="col-sm-2">Nro Documento</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="nrodocumento" placeholder="Nro de Documento" v-model="postulante.NroDocumento" >
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
                      <input type="date" class="form-control pull-right"  id="fechanacimiento" v-model="postulante.FechaNacimiento" >
                    </div>
                  </div>
                <label for="edad" class="col-sm-2">Edad</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="edad" placeholder="Edad" v-model="postulante.Edad" >
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="sexo" class="col-sm-2">Sexo</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.Sexo" id="sexo">
                      <option value="M">MASCULINO</option>
                      <option value="F">FEMENINO</option>
                    </select>
                  </div>
                <label for="niveleducacion" class="col-sm-2">Nivel Educacion</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.CodGrado" id="grado">
                      <option v-for="(grado,index) in listaGrado" :key="index" :value="grado.tipoid">{{grado.descripcion}}</option>
                    </select>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="estadocivil" class="col-sm-2">Estado Civil</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.CodEstadoCivil" id="estadocivil">
                      <option v-for="(civil,index) in listaEstadoCivil" :key="index" :value="civil.tipoid">{{civil.descripcion}}</option>
                    </select>
                  </div>
                <label for="paisorigen" class="col-sm-2">Pais Origen</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.CodigoPais" id="codpais">
                      <option  v-for="(pais,index) in listaPais" :key="index" :value="pais.tipoid">{{pais.descripcion}}</option>
                    </select>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="direccion" class="col-sm-2">Direccion</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="direccion" placeholder="Tu direccion donde vive" v-model="postulante.Direccion">
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="correo" class="col-sm-2">Correo Electronico</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="correo" placeholder="Tu ejemplo@empresa.com" v-model="postulante.Correo">
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="observacion" class="col-sm-2">Observacion</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="observacion" placeholder="Observaciones" v-model="postulante.Observacion">
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
  methods: {
    postulantecreate () {
      console.log('dato..... ' + this.postulante.id)
      if (this.postulante.id > 0) {
        console.log('llamando para actualizar..... x)')
        this.postulanteupdate()
      } else {
        console.log('valor  ------------------------' + this.postulante.CodDocumento)
        axios.post('http://localhost:8090/postulantes/postulante',
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
            observacion: this.postulante.Observacion
          })
          .then(response => {
            console.log(response.data)
            this.$router.push('/postulante')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    postulantegetxid () {
      axios.get('http://localhost:8090/postulantes/getid/' + this.id)
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
        })
        .catch(error => {
          console.log(error)
        })
    },
    postulanteupdate () {
      axios.put('http://localhost:8090/postulantes/update/' + this.id,
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
          observacion: this.postulante.Observacion})
        .then(response => {
          console.log(response.data)
          this.$router.push('/postulante')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted: function () {
    // Esta funcion inicializa los datos de los controles
    axios.get('http://localhost:8090/tipo/allinfopostulante')
      .then(response => {
        console.log(response.data.grado)
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
</script>
