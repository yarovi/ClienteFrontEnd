<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Configuracion Puertos</h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form role="form">
          <div class="box-body">
            <div class="form-group">
              <label for="Nombre Dispositivo">Codigo</label>
              <input
              type="text"
              class="form-control"
              id="fieldid"
              v-model="dispositivo.fieldid" disabled>
            </div>
            <div class="form-group">
              <label for="Nombre Dispositivo">Descripcion</label>
              <input
                type="text"
                class="form-control"
                id="fielddescripcion"
                placeholder="Ingrese Descripcion"
                v-model="dispositivo.fielddescripcion"
                v-model.trim="$v.dispositivo.fielddescripcion.$model" maxlength="25"  >
                <div class="error" v-if="$v.dispositivo.fielddescripcion.$error">
                  <li v-if="!$v.dispositivo.fielddescripcion.required">Rellene este campo</li>
                </div>
            </div>
            <div class="form-group">
              <label for="puer">Seleccione un Puerto</label>
              <!-- <input type="text" class="form-control" id="fieldpuerto" placeholder="Puerto" v-model="dispositivo.fieldpuerto"> -->
              <select class="form-control"
              v-model="dispositivo.fieldpuerto"
              id="fielpuerto"
              v-model.trim="$v.dispositivo.fieldpuerto.$model">
                <option v-for="(d,index) in lstaDispositivo" :key="index" :value="d.nombre">{{d.nombre}}</option>
              </select>
              <div class="error"
                v-if="$v.dispositivo.fieldpuerto.$error">
                <li v-if="!$v.dispositivo.fieldpuerto.required">Selecione una Categoria</li>
              </div>
            </div>
            <!-- <div class="form-group">
              <label>Estado</label>
              <select class="form-control" v-model="dispositivo.fieldestado" id="fieldestado">
                <option value="0">Activo</option>
                <option value="1">Desactivo</option>
              </select>
            </div> -->
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="button" @click="dispositivocreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/puerto" class="btn btn-danger pull-right">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
<script>
import axios from 'axios'
import {required} from 'vuelidate/lib/validators'
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      dispositivo: {
        fieldid: '0',
        fielddescripcion: '',
        fieldpuerto: ''
        // fieldestado: ''
      },
      lstaDispositivo: []
    }
  },
  validations: {
    dispositivo: {
      fielddescripcion: {
        required
      },
      fieldpuerto: {
        required
      }
    }
  },
  methods: {
    dispositivocreate () {
      if (this.ejecutarValidacion() === true) {
        console.log('dato..... ' + this.dispositivo.fieldid)
        if (this.dispositivo.fieldid > 0) {
          console.log('llamando para actualizar..... x)')
          this.dispositivoupdate()
        } else {
          axios.post('/dispositivo/create',
            {id: this.dispositivo.fieldid,
              descripcion: this.dispositivo.fielddescripcion,
              puerto: this.dispositivo.fieldpuerto,
              estado: this.dispositivo.fieldestado})
            .then(response => {
              console.log(response.data)
              this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se actualizo :' + this.dispositivo.fielddescripcion + '.')
              setTimeout(() => {
                console.log(response.data)
                this.$router.push('/puerto')
              }, 1500)
            })
            .catch(error => {
              this.mostrarNotificacion('error', 'Ups encontro un Problema.!', error.response.data.detalle)
              console.log(error)
            })
        }
      }
    },
    dispositivogetxid () {
      axios.get('/dispositivo/getid/' + this.id)
        .then(response => {
          console.log(response.data)
          this.dispositivo.fieldid = response.data.id
          this.dispositivo.fielddescripcion = response.data.descripcion
          this.dispositivo.fieldpuerto = response.data.puerto
        })
        .catch(error => {
          console.log(error)
        })
    },
    dispositivoupdate () {
      axios.put('/dispositivo/update/' + this.id,
        { id: this.dispositivo.fieldid,
          descripcion: this.dispositivo.fielddescripcion,
          puerto: this.dispositivo.fieldpuerto,
          estado: this.dispositivo.fieldestado})
        .then(response => {
          console.log(response.data)
          this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se actualizo :' + this.dispositivo.fielddescripcion + '.')
          setTimeout(() => {
            console.log(response.data)
            this.$router.push('/puerto')
          }, 1500)
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
        // alert('todo bien.')
      }
    }
  },
  created: function () {
    if (this.id !== undefined) {
      console.log('Actualizando el valor de if..... x)' + this.id)
      this.dispositivogetxid()
    } else {
      console.log('Nuevo..... x)')
    }
  },
  mounted: function () {
    axios.get('/dispositivo/listadispositivo')
      .then(res => {
        console.log(res)
        this.lstaDispositivo = res.data
      })
      .catch(er => {
        console.log('algo salio mal')
      })
  }
}
</script>
