<template>
<section>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Sub-Categorias Puertos</h3>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form role="form">
          <div class="box-body">
            <div class="form-group">
              <label for="Nombre Dispositivo">Codigo</label>
              <input type="text" class="form-control" id="fieldid"  v-model="subcategoria.fieldid" disabled>
            </div>
            <div class="form-group">
              <label for="puer">Codigo Referencia (3 Caracteres)</label>
              <input type="text" class="form-control" id="idreferencia" placeholder="Referencia" v-model="subcategoria.fieldreferencia" maxlength="3">
            </div>
            <div class="form-group">
              <label for="Nombre Sub - Categoria">Descripcion</label>
              <input
                type="text"
                class="form-control"
                id="fielddescripcion"
                placeholder="Ingrese Sub-Categoria" v-model="subcategoria.fielddescripcion"  v-model.trim="$v.subcategoria.fielddescripcion.$model" maxlength="20" >
                <div class="error" v-if="$v.subcategoria.fielddescripcion.$error">
                  <li v-if="!$v.subcategoria.fielddescripcion.required">Rellene este campo</li>
                </div>
            </div>
            <div class="form-group">
              <label> Seleccione una Categoria</label>
              <select class="form-control" v-model="subcategoria.fieldcategoria" id="fieldcategoria" v-model.trim="$v.subcategoria.fieldcategoria.$model">
                <option v-for="(item,index) in categorias" :key="index" :value="item.id" >{{item.descripcion }}</option>
              </select>
              <div class="error" v-if="$v.subcategoria.fieldcategoria.$error">
                <li v-if="!$v.subcategoria.fieldcategoria.required">Selecione una Categoria</li>
              </div>
            </div>
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="button" @click="subcategoriacreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/subcategoria" class="btn btn-danger pull-right">Cancelar</router-link>
          </div>
          <div class="form-group center">
                <p  v-if="submitStatus === 'ERROR'">Por favor llene los campos obligatorios..!</p>
              </div>
        </form>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
  <!-- <div class="row">
    <notifications group="foo" position="button  right"></notifications>
  </div> -->
  </section>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
import axios from 'axios'

// const RESOURCE_NAME = '/subcategoria'

export default {
  data: function () {
    return {
      id: this.$route.params.id,
      subcategoria: {
        fieldid: '0',
        fieldCodTipo: '',
        fielddescripcion: '',
        fieldreferencia: '',
        fieldcategoria: ''
      },
      categorias: [],
      submitStatus: ''
    }
  },
  validations: {
    subcategoria: {
      fieldcategoria: {
        required
      },
      fielddescripcion: {
        required
        // minLength: minLength(4)
      }
    }
  },
  methods: {
    subcategoriacreate () {
      if (this.ejecutarValidacion() === true) {
        console.log('dato..... ' + this.subcategoria.fieldid)
        if (this.subcategoria.fieldid > 0) {
          console.log('llamando para actualizar..... x)')
          this.subcategoriaupdate()
        } else {
          // http://localhost:8090/subcategoria/create
          axios.post('/subcategoria/create',
            {id: this.subcategoria.fieldid,
              descripcion: this.subcategoria.fielddescripcion,
              referencia: this.subcategoria.fieldreferencia,
              CodTipo: this.subcategoria.fieldCodTipo,
              parent_idtipo: this.subcategoria.fieldcategoria})
            .then(response => {
              this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se registro a:' + this.subcategoria.fielddescripcion + '.')
              setTimeout(() => {
                console.log(response.data)
                this.$router.push('/subcategoria')
              }, 2500)
            })
            .catch(error => {
              this.mostrarNotificacion('error', 'Ups encontro un Problema.!', error.response.data.detalle)
              console.log(error)
            })
        }
      }
    },
    subcategoriaByID () {
      axios.get('/subcategoria/getItemById/' + this.id)
        .then(response => {
          console.log(response.data)
          this.subcategoria.fieldid = response.data.tipoid
          this.subcategoria.fielddescripcion = response.data.descripcion
          this.subcategoria.fieldcategoria = response.data.parent_idtipo
          this.subcategoria.fieldreferencia = response.data.referencia
        })
        .catch(error => {
          console.log(error.response.data.detalle)
        })
    },
    subcategoriaupdate () {
      axios.put('/subcategoria/update/' + this.id,
        { id: this.subcategoria.fieldid,
          descripcion: this.subcategoria.fielddescripcion,
          referencia: this.subcategoria.fieldreferencia,
          CodTipo: this.subcategoria.fieldCodTipo,
          parent_idtipo: this.subcategoria.fieldcategoria})
        .then(response => {
          this.mostrarNotificacion('success', 'Operacion correctamente.!', 'Se actualizo :' + this.subcategoria.fielddescripcion + '.')
          console.log(response.data)
          setTimeout(() => {
            console.log(response.data)
            this.$router.push('/subcategoria')
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
        // alert('todo bien.')
      }
    }
  },
  created: function () {
    if (this.id !== undefined) {
      console.log('Actualizando el valor de if..... x)' + this.id + 'otro ' + this.clave)
      this.subcategoriaByID()
    } else {
      console.log('Nuevo..... x)')
    }
  },
  mounted: function () {
    axios.get('/categoria/allCategory')
      .then(response => {
        console.log(response.data.grado)
        this.categorias = response.data
      })
      .catch(error => {
        console.log(error.response.data.detalle)
      })
  }
}
</script>
