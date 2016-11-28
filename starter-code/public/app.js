console.log('app.js connected');

$(document).ready(function(){
  console.log('DOM ready');

    /* - - - Pick A Number hanlder - - - */
  $('#guess-number-form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: '/pick-a-number',
      method: 'GET',
      data: $('#guess-number-form').serialize(),
      success: handleSuccess,
      error: function (){
        console.log('error app js');
      }
    });
  });




}); // End of Doc Ready.

    function handleSuccess(response){
      console.log(response);
      $('#high-low-correct').html(response);
    }
