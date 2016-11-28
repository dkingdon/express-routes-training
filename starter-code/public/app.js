console.log('app.js connected');

$(document).ready(function(){
  console.log('DOM ready');

    /* - - - Pick A Number hanlder - - - */
  $('#guess-number-form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/pick-a-number',
      data: $('#guess-number-form').serialize(),
      success: handleSuccess,
      error: function (){
        console.log('error app js');
      }
    });
  });

  /* - - - Handles changes target number - - - */
  $('#target-number-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/pick-a-number',
      data: $('#target-number-form').serialize(),
      success: handleChangeTargetSuccess,
      error: function () {
        console.log('ajax error changing numbers');
      }
    });
  });



}); // End of Doc Ready.

    //handles pick a number success
    function handleSuccess(response){
      console.log(response);
      $('#high-low-correct').html(response);
    }

    //handles change target number success
    function handleChangeTargetSuccess(response) {
      console.log(response);
      $('#target-number-form')[0].reset();
    }
