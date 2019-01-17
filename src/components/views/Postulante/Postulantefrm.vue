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
                <label for="Nombre Dispositivo" class="col-sm-2">A. Paterno</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="ApellidoPaterno" placeholder="Ingrese A. Paterno" v-model="postulante.ApellidoPaterno" >
                </div>
                <label for="Nombre Dispositivo" class="col-sm-2">A. Materno</label>
                <div class="col-sm-4">
                 <input type="text" class="form-control" id="ApellidoMaterno" placeholder="Ingrese A. Materno" v-model="postulante.ApellidoMaterno" >
                </div>
              </div>
               </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Nombre Completo</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="nombre" placeholder="Tu nombre" v-model="postulante.nombre">
                </div>
                </div>
            </div>
            <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="Nombre Dispositivo" class="col-sm-2">Tipo Documento</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.Sexo" id="sexo">
                      <option value="0">Libretta xx</option>
                      <option value="1">Libreta BB</option>
                    </select>
                  </div>
                <label for="Nombre Dispositivo" class="col-sm-2">Nro Documento</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="ApellidoMaterno" placeholder="Nro de Documento" v-model="postulante.NroDocuemnto" >
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="Nombre Dispositivo" class="col-sm-2">Fecha Nacimiento</label>
                  <div class="col-sm-4">
                    <div class="input-group date">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input type="text" class="form-control pull-right" id="datepicker">
                    </div>
                  </div>
                <label for="Nombre Dispositivo" class="col-sm-2">Edad</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="ApellidoMaterno" placeholder="Edad" v-model="postulante.NroDocuemnto" >
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="Nombre Dispositivo" class="col-sm-2">Sexo</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.Sexo" id="sexo">
                      <option value="0">Masculino</option>
                      <option value="1">Femenino</option>
                    </select>
                  </div>
                <label for="Nombre Dispositivo" class="col-sm-2">Nivel Educacion</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.Sexo" id="sexo">
                      <option value="0">Primaria</option>
                      <option value="1">Seundaria</option>
                    </select>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
               <div class="row">
                  <div class=" form-horizontal">
                <label for="Nombre Dispositivo" class="col-sm-2">Estado Civil</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.Sexo" id="sexo">
                      <option value="0">Casado</option>
                      <option value="1">Soltero</option>
                    </select>
                  </div>
                <label for="Nombre Dispositivo" class="col-sm-2">Pais Origen</label>
                  <div class="col-sm-4">
                    <select class="form-control" v-model="postulante.Sexo" id="sexo">
                      <option value="0">Peru</option>
                      <option value="1">Extrangero</option>
                    </select>
                  </div>
              </div>
               </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Direccion</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="nombre" placeholder="Tu direccion donde vive" v-model="postulante.nombre">
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Correo Electronico</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="nombre" placeholder="Tu ejemplo@empresa.com" v-model="postulante.nombre">
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                  <label for="nombre" class="col-sm-2">Observacion</label>
                <div class="col-sm-10">
                   <input type="text" class="form-control" id="nombre" placeholder="Observaciones" v-model="postulante.observacion">
                </div>
                </div>
            </div>
            </div>
            <div class="box-footer">
                <button type="button" @click="dispositivocreate()" class="btn btn-primary">Aceptar</button>
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
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      postulante: {
        id: '0',
        codDocumento: '',
        NroDocuemnto: '',
        CodSangre: '',
        CodEstadoCivil: '',
        codigPais: '',
        nombre: '',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        FechaNacimiento: '',
        Correo: '',
        Sexo: ''
      }
    }
  },
  methods: {
    postulantecreate () {
      console.log('dato..... ' + this.postulante.fieldid)
      if (this.postulante.id > 0) {
        console.log('llamando para actualizar..... x)')
        this.dispositivoupdate()
      } else {
        axios.post('..',
          {id: this.postulante.id,
            NroDocuemnto: this.postulante.NroDocuemnto,
            ApellidoPaterno: this.postulante.ApellidoPaterno,
            ApellidoMaterno: this.postulante.ApellidoMaterno})
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    postulantegetxid () {
      axios.get('http://localhost:8090/dispositivo/getid/' + this.id)
        .then(response => {
          console.log(response.data)
          this.postulante.id = response.data.id
          this.postulante.nombre = response.data.nombre
          this.postulante.NroDocuemnto = response.data.NroDocuemnto
        })
        .catch(error => {
          console.log(error)
        })
    },
    postulanteupdate () {
      axios.put('http://localhost:8090/dispositivo/update/' + this.id,
        { id: this.postulante.id,
          nombre: this.postulante.nombre,
          NroDocuemnto: this.postulante.NroDocuemnto,
          ApellidoPaterno: this.postulante.ApellidoPaterno})
        .then(response => {
          console.log(response.data)
          this.$router.push('/postulante')
        })
        .catch(error => {
          console.log(error)
        })
    }
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
