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
              <input type="text" class="form-control" id="fieldid"  v-model="empresa.idempresa" disabled>
            </div>
            <div class="form-group">
              <label for="puer">Razon Social</label>
              <input type="text" class="form-control" id="idreferencia" placeholder="Referencia" v-model="empresa.razonsocial">
            </div>
            <div class="form-group">
              <label for="puer">Ruc</label>
              <input type="text" class="form-control" id="idreferencia" placeholder="Referencia" v-model="empresa.ruc">
            </div>
            <div class="form-group">
              <label for="puer">Direccion Empresa</label>
              <input type="text" class="form-control" id="idreferencia" placeholder="Referencia" v-model="empresa.direccion">
            </div>
            <div class="form-group ">
                <div class="row">
                    <div class="col-sm-4">
                        <label for="telefono" class="col-sm-2">Telefono</label>
                        <input type="text" class="form-control" id="id"  v-model="empresa.telefono" >
                    </div>
                <div class="col-sm-4">
                    <label for="telefono" >Correo</label>
                    <input type="text" class="form-control" id="id"  v-model="empresa.telefono" >
                </div>
                <div class="col-sm-4">
                    <label for="telefono" >Portal</label>
                    <input type="text" class="form-control" id="id"  v-model="empresa.telefono" >
                    </div>
                </div>
              </div>
        <div>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <img :src="avatar" alt="Image" class="img-thumbnail img-responsive" width="400" height="300">
                    <div class="btn btn-default btn-file">
                          Cargar Imagen <input type="file" @change="GetImage" >
                    </div>
                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="button" @click="subcategoriacreate()" class="btn btn-primary">Aceptar</button>
              <router-link to="/subcategoria" class="btn btn-danger">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
  </section>
</template>
<script>
// import axios from 'axios'
export default ({
  data: function () {
    return {
      empresa: [],
      avatar: '/static/dist/img/empresa.png'
    }
  },
  ready: function () {
    console.log('cargando .....')
  },
  methods: {
    GetImage (e) {
      let image = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.avatar = e.target.result
      }
    }
  }
})
</script>
