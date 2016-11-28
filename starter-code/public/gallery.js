console.log('gallery.js connected');

$(document).ready(function(){
  console.log('DOM ready');

    // handles new artwork submission
  $('#new-artwork-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/artworks',
      data: $('#new-artwork-form').serialize(),
      success: addArtworkSuccess,
      error: function () {
        console.log('ajax error');
      }
    });
  });


}); // End of Doc ready

  //artwork submission success
  function addArtworkSuccess(response){
    console.log(response);
  }
