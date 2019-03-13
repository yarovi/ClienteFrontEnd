<template>
  <section>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Datos de la empresa</h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form role="form">
          <div class="box-body">
            <div class="form-group">
              <label for="Nombre Dispositivo">Codigo</label>
              <input type="text" class="form-control" id="fieldid"  v-model="empresa.codigo" disabled>
            </div>
            <div class="form-group">
              <label for="puer">Razon Social</label>
              <input type="text" class="form-control" id="razonsocial" placeholder="Razon Social" v-model="empresa.razonsocial" v-model.trim="$v.empresa.razonsocial.$model">
                <div class="error" v-if="$v.empresa.razonsocial.$error">
                  <li v-if="!$v.empresa.razonsocial.required">Es necesario la Razon Social de la Empresa</li>
                </div>
            </div>
            <div class="form-group">
              <label for="ruc">Ruc</label>
              <input type="text" class="form-control" id="ruc" placeholder="ruc" v-model="empresa.ruc" v-model.trim="$v.empresa.ruc.$model">
                <div class="error" v-if="$v.empresa.ruc.$error">
                  <li v-if="!$v.empresa.ruc.required">Es necesario ingresar un ruc</li>
                  <li v-if="!$v.empresa.ruc.minLength">El valor minimo es 12 digitos</li>
                  <li v-if="!$v.empresa.ruc.maxLength">El valor maximo es 12 digitos</li>
                </div>
            </div>
            <div class="form-group">
              <label for="direccion">Direccion</label>
              <input type="text" class="form-control" id="direccion" placeholder="Direccion" v-model="empresa.direccion" v-model.trim="$v.empresa.direccion.$model">
                <div class="error" v-if="$v.empresa.direccion.$error">
                  <li v-if="!$v.empresa.direccion.required">Es necesario la direccion</li>
                </div>
            </div>
            <div class="form-group ">
                <div class="row">
                    <div class="col-sm-4">
                        <label for="telefono" class="col-sm-2">Telefono</label>
                        <input type="text" class="form-control" id="id"  v-model="empresa.telefono" v-model.trim="$v.empresa.telefono.$model" >
                        <div class="error" v-if="$v.empresa.telefono.$error">
                          <li v-if="!$v.empresa.telefono.required">Es necesario el telefono</li>
                        </div>
                    </div>
                <div class="col-sm-4">
                    <label for="correo" >Correo</label>
                    <input type="text" class="form-control" id="id"  v-model="empresa.correo" >
                </div>
                <div class="col-sm-4">
                    <label for="portal" >Portal</label>
                    <input type="text" class="form-control" id="id"  v-model="empresa.portal" >
                    </div>
                </div>
              </div>
        <div>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <!-- <img :src="avatar" alt="Image" class="img-thumbnail img-responsive" width="400" height="300">
                    <div class="btn btn-default btn-file">
                          Cargar Imagen <input type="file" @change="GetImage" >
                    </div> -->
                    <label>Imagen
                      <div class="btn btn-default btn-file">
                        Seleccione el logo<input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                      </div>
                    </label>
                   <img :src="avatar" alt="Image" class="img-thumbnail img-responsive" width="400" height="300">

                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
        </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="button" @click="empresacreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/empresa" class="btn btn-danger">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
  </section>
</template>
<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import axios from 'axios'
export default ({
  data: function () {
    return {
      id: this.$route.params.id,
      empresa: {
        codigo: '',
        razonsocial: '',
        ruc: '',
        direccion: '',
        telefono: '',
        correo: '',
        portal: '',
        logo: ''
      },
      avatar: null,
      file: ''
    }
  },
  validations: {
    empresa: {
      razonsocial: {
        required
      },
      ruc: {
        required,
        minLength: minLength(12),
        maxLength: maxLength(12)
      },
      direccion: {
        required
      },
      telefono: {
        required
      }
    }
  },
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onload = e => {
        this.avatar = e.target.result
      }
    },
    GetImage (e) {
      let image = e.target.files[0]
      let reader = new FileReader()
      console.log(image)
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.avatar = e.target.result
      }
      console.log(this.avatar)
    },
    empresacreate () {
      if (this.ejecutarValidacion() === true) {
        console.log('dato..... ' + this.empresa.codigo)
        if (this.empresa.codigo > 0) {
          console.log('llamando para actualizar..... x)')
          this.empresaupdate()
        } else {
          axios.post('/empresa/create',
            {id: this.empresa.codigo,
              ruc: this.empresa.ruc,
              razonsocial: this.empresa.razonsocial,
              direccion: this.empresa.direccion,
              telefono: this.empresa.telefono,
              correo: this.empresa.correo,
              portal: this.empresa.portal,
              logo: this.empresa.logo
            })
            .then(response => {
              // let codigo = response.data.empresa.id
              if (response.data.id > 0) {
                console.log('actualizando datos ' + response)
                let formData = new FormData()
                formData.append('file', this.file)
                axios.put('/empresa/logo2/' + response.data.id,
                  formData,
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                )
                  .then(res => {
                    console.log('se cargo el logo correctamente')
                    this.$router.push('/empresa')
                  })
                  .catch(er => {
                    this.mostrarNotificacion('error', 'Ups encontro un Problema.!', er.response.data.detalle)
                    console.log(er.response.data.detalle)
                  })
              }
              this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se registro a: ' + response.data.razonsocial + '.')
              // console.log(response.data)
              console.log(response)
            })
            .catch(error => {
              this.mostrarNotificacion('error', 'Ups encontro un Problema.!', error.response.data.detalle)
              console.log(error.response.data.detalle)
            })
        }
      }
    },
    empresaupdate () {
      axios.put('/empresa/update/' + this.empresa.codigo,
        {id: this.empresa.codigo,
          ruc: this.empresa.ruc,
          razonsocial: this.empresa.razonsocial,
          direccion: this.empresa.direccion,
          telefono: this.empresa.telefono,
          correo: this.empresa.correo,
          portal: this.empresa.portal
        })
        .then(response => {
          if (response.data.id > 0) {
            console.log('actualizando datos ' + response)
            let formData = new FormData()
            formData.append('file', this.file)
            axios.put('/empresa/logo2/' + response.data.id,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            )
              .then(res => {
                console.log('se cargo el logo correctamente')
                this.$router.push('/empresa')
              })
              .catch(er => {
                this.mostrarNotificacion('error', 'Ups encontro un Problema.!', er.response.data.detalle)
                console.log(er.response.data.detalle)
              })
          }
          this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se actualizo :' + this.empresa.razonsocial + '.')
          console.log(response.data)
        })
        .catch(error => {
          this.mostrarNotificacion('error', 'Ups encontro un Problema.!', error.response.data.detalle)
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
      }
    }
  },
  mounted: function () {
    axios.get('/empresa/getid/' + this.id)
      .then(response => {
        // console.log(response.data.grado)
        this.empresa.codigo = response.data.id
        this.empresa.ruc = response.data.ruc
        this.empresa.razonsocial = response.data.razonsocial
        this.empresa.telefono = response.data.telefono
        this.empresa.direccion = response.data.direccion
        this.empresa.portal = response.data.portal
        this.empresa.correo = response.data.correo
        console.log(response.data.logo)
        this.avatar = 'data:image/jpg;base64,' + response.data.logo
      })
      .catch(error => {
        console.log(error)
      })
  }
})
</script>
