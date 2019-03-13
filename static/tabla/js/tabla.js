$(function () {

  if ( $.fn.dataTable.isDataTable( '#tablafiltro' ) ) {
    table = $('#tablafiltro').DataTable();
    table.destroy();
}

 var table= $('#tablafiltro').DataTable({
    "language": {
      "search": "buscar: ",
      "lengthMenu":"Ver  _MENU_   por pagina",
      "info": "Mostrando  del _START_ al _END_ de un total de _TOTAL_ ",
      "oPaginate": {
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
      }
    }
  })

console.log('mierda mierda mierda')

// $('#tablafiltro tbody tr').click(function() {

//   $(this).addClass('bg-success').siblings().removeClass('bg-success');
// });

// $('#elegirPostuante').click( function () {

//     $('#modal-postulante').modal('hide');
//     document.getElementById("Codigopostulante3").value=table.rows('.bg-success').data()[0][0];
//     // $('#Codigopostulante').val(table.rows('.bg-success').data()[0][0]);
//     document.getElementById('nombrePostulante').value=table.rows('.bg-success').data()[0][1];
//     console.log(table.rows('.bg-success').data()[0][1]);

// } );


})
