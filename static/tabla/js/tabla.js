$(function () {
  // alert('hola')
 var table= $('#tablafiltro').DataTable({
    "language": {
      "search": "buscar: ",
      "lengthMenu":"Ver  _MENU_   por pagina",
      "info": "Mostrando  del _START_ al _END_ de un total de _TOTAL_ ",
      "oPaginate": {
          // "sFirst":    "Primero",
          // "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
      }
    }
  })

//   $('#tablafiltro tbody').on( 'click', 'tr', function () {
//     if ($(this).hasClass('selected')){
//       $(this).removeClass('selected')
//     }
//     else {
//       table.$('tr.selected').removeClass('selected');
//       $(this).addClass('selected');
//     }
// } );
$('#tablafiltro tbody tr').click(function() {
//   $('#tablafiltro tbody').on( 'click', 'tr', function () {
  $(this).addClass('bg-success').siblings().removeClass('bg-success');
  $('#nombrePostulante').value='hola'
});

$('#elegirPostuante').click( function () {
    alert( table.rows('.bg-success').data().length +' row(s) selected' + table.rows('.bg-success').data()[0][1]);
} );


})
