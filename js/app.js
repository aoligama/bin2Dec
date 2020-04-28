$( document ).ready(function() {

  $('#binaryInput').keydown(function(ev) {
    if(ev.keyCode != 48 && ev.keyCode != 49 && ev.keyCode != 8) {
      ev.preventDefault();
    }
  });

});

function convertNumber () {

  let bin = $('#binaryInput').val();

  if(bin){
    let decimal = parseInt(bin, 2)
    $('#result').removeClass('hidden');
    $('#decimalInput').val(decimal);
  } else{
    alert('Type a binary number');
  }

  
}