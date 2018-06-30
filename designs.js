
// Select color input
$('#pixelCanvas').on('click','.pixel',function(){
  var pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
});


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event) {

// Select size input
var Hieght=$('#inputHeight').val();                
var Width=$('#inputWeight').val(); 

$('#pixelCanvas tr').remove();
for (var i=1;i<=Hieght;i++) {
    $('#pixelCanvas').append("<tr></tr>");
    for (var w=1;w<=Width;w++) {
      $( 'tr:last').append("<td></td>");
      $('td').attr('class','pixel');
    }
  }
  event.preventDefault();  

});
