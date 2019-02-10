<template>
<div>
  <div class="wrapper">
  <!-- Main Header -->
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
    </nav>
  </header>
  </div>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>administración</p>
          <!-- Status -->
          <!-- <a href="#"><i class="fa fa-circle text-success"></i> Online</a> -->
        </div>
      </div>
      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">Menu</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>Configuracion</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link to="/puerto">Puerto</router-link></li>
            <li><router-link to="/empresa">Empresa</router-link></li>
            <li><router-link to="/categoria">Categoria</router-link></li>
            <li><router-link to="/subcategoria">Sub-Categoria</router-link></li>
          </ul>
        </li>
        <li class="active"><a href="#"><i class="fa fa-link"></i> <span><router-link to="/postulante">Postulante</router-link></span></a></li>
        <li><a href="#"><i class="fa fa-link"></i> <span><router-link to="/examen">Examen</router-link></span></a></li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       Panel Principal
        <small>sistema de gestion de pacientes.</small>
      </h1>
    </section>
    <!-- Main content -->
    <section class="content container-fluid">
      <!--------------------------
        | Your Page Content Here |
        -------------------------->
        <router-view/>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <!-- Main Footer -->
  <footer class="main-footer">
    <div>
      <notifications group="foo" position="bottom right" ></notifications>
    </div>
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      GITECH
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2018 <a href="#">Compania</a>.</strong> Todo los derechos reservados.
  </footer>
  <!-- Control Sidebar -->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
