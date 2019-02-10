<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Categorias</h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form role="form">
          <div class="box-body">
            <div class="form-group">
              <label for="Nombre Dispositivo">Codigo</label>
              <input type="text" class="form-control" id="tipoid"  v-model="categoria.id" disabled>
            </div>
            <div class="form-group">
              <label for="Nombre Dispositivo">Descripcion</label>
              <input
                type="text"
                class="form-control"
                id="fielddescripcion"
                placeholder="Ingrese Descripcion" v-model="categoria.descripcion" v-model.trim="$v.categoria.descripcion.$model" maxlength="25" >
                <div class="error" v-if="$v.categoria.descripcion.$error">
                  <li v-if="!$v.categoria.descripcion.required">Rellene este campo</li>
                </div>
            </div>
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="button" @click="categoriacreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/categoria" class="btn btn-danger pull-right">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
  data: function () {
    return {
      id: this.$route.params.id,
      categoria: {
        id: '0',
        descripcion: '',
        codtipo: '',
        referencia: ''
      }
    }
  },
  validations: {
    categoria: {
      descripcion: {
        required
      }
    }
  },
  methods: {
    categoriacreate () {
      if (this.ejecutarValidacion() === true) {
        console.log('dato..... ' + this.categoria.id)
        if (this.categoria.id > 0) {
          console.log('llamando para actualizar..... x)')
          this.categoriaupdate()
        } else {
          axios.post('http://localhost:8090/categoria/create',
            {tipoid: this.categoria.id,
              descripcion: this.categoria.descripcion,
              codtipo: this.categoria.codtipo
            })
            .then(response => {
              this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se registro a:' + this.categoria.descripcion + '.')
              console.log(response.data)
              setTimeout(() => {
                console.log(response.data)
                this.$router.push('/categoria')
              }, 2500)
            })
            .catch(error => {
              this.mostrarNotificacion('error', 'Ups encontro un Problema.!', error.response.data.detalle)
              console.log(error.response.data.detalle)
            })
        }
      }
    },
    categoriagetxid () {
      axios.get('http://localhost:8090/categoria/getItemById/' + this.id)
        .then(response => {
          console.log(response.data)
          this.categoria.id = response.data.tipoid
          this.categoria.descripcion = response.data.descripcion
          this.categoria.codtipo = response.data.codtipo
        })
        .catch(error => {
          console.log(error.response.data.detalle)
        })
    },
    categoriaupdate () {
      axios.put('http://localhost:8090/categoria/update/' + this.id,
        { id: this.categoria.fieldid,
          descripcion: this.categoria.descripcion,
          CodTipo: this.categoria.codtipo
        })
        .then(response => {
          this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se actualizo :' + this.categoria.descripcion + '.')
          console.log(response.data)
          setTimeout(() => {
            console.log(response.data)
            this.$router.push('/categoria')
          }, 2500)
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
  created: function () {
    if (this.id !== undefined) {
      console.log('Actualizando el valor de if..... x)' + this.id)
      this.categoriagetxid()
    } else {
      console.log('Nuevo..... x)')
    }
  }
}
</script>
