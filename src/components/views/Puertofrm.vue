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
              <input type="text" class="form-control" id="fieldid"  v-model="dispositivo.fieldid" disabled>
            </div>
            <div class="form-group">
              <label for="Nombre Dispositivo">Descripcion</label>
              <input
                type="text"
                class="form-control"
                id="fielddescripcion"
                placeholder="Ingrese Descripcion" v-model="dispositivo.fielddescripcion"
              >
            </div>
            <div class="form-group">
              <label for="puer">Puerto</label>
              <input type="text" class="form-control" id="fieldpuerto" placeholder="Puerto" v-model="dispositivo.fieldpuerto">
            </div>
            <div class="form-group">
              <label>Estado</label>
              <select class="form-control" v-model="dispositivo.fieldestado" id="fieldestado">
                <option value="0">Activo</option>
                <option value="1">Desactivo</option>
              </select>
            </div>
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
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      dispositivo: {
        fieldid: '0',
        fielddescripcion: '',
        fieldpuerto: '',
        fieldestado: ''
      }
    }
  },
  methods: {
    dispositivocreate () {
      console.log('dato..... ' + this.dispositivo.fieldid)
      if (this.dispositivo.fieldid > 0) {
        console.log('llamando para actualizar..... x)')
        this.dispositivoupdate()
      } else {
        axios.post('http://localhost:8090/dispositivo/create',
          {id: this.dispositivo.fieldid,
            descripcion: this.dispositivo.fielddescripcion,
            puerto: this.dispositivo.fieldpuerto,
            estado: this.dispositivo.fieldestado})
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    dispositivogetxid () {
      axios.get('http://localhost:8090/dispositivo/getid/' + this.id)
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
      axios.put('http://localhost:8090/dispositivo/update/' + this.id,
        { id: this.dispositivo.fieldid,
          descripcion: this.dispositivo.fielddescripcion,
          puerto: this.dispositivo.fieldpuerto,
          estado: this.dispositivo.fieldestado})
        .then(response => {
          console.log(response.data)
          this.$router.push('/puerto')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created: function () {
    if (this.id !== undefined) {
      console.log('Actualizando el valor de if..... x)' + this.id)
      this.dispositivogetxid()
    } else {
      console.log('Nuevo..... x)')
    }
  }
}
</script>
