$(function(){


// $('.random-gif, .random-sticker, .search-gifs').hide();
//Menu Items

$('.label').on('click', function(event){
  event.preventDefault();
  $(this).parent().find('div:first').slideToggle();

})


//RANDOM GIFS

$('#gif-button').on('click', function(event){
  event.preventDefault();
  $('.random-gif').show();
  var tempTag = $('#gif-tag').val();
  $('.gif-image').empty();

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + tempTag,
    }).then(function(data){
      $('.gif-image').append('<img class="img" src="' + data.data.image_original_url + '" alt="gif" />');
    }).catch (function(){
      //error message
  })//catch
})//click


//RANDOM STICKERS

$('#sticker-button').on('click', function(event){
  event.preventDefault();
  var tempTag = $('#sticker-tag').val();
  $('.sticker-image').empty();

  $.ajax({
    url: 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=' + tempTag,
    }).then(function(data){
      $('.sticker-image').append('<img class="stick" src="' + data.data.image_original_url + '" alt="sticker" />');
    }).catch (function(){
      //error message
  })//catch
})//click


//SEARCH

$('#page1').on('click', function(event){
  event.preventDefault();


})//click

$('#search-button').on('click', function(event){
  event.preventDefault();
  var tempTag = $('#search-tag').val();
  $('.search-results').empty();


  if (tempTag == ''){   //if there is no input, then return a random sticker
      $('.search-results').append('<p>Please enter a search query</p>');
  } else {    //return a random sticker with a specific tag
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search?q=' + tempTag + '&api_key=dc6zaTOxFJmzC&limit=15&offset=0',
    }).then(function(data){
      for (i = 0; i < 15; i++) {
        $('.search-results').append('<img class="img" src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      };

      // for (var i = 0; i < 25; i++) {
      //   if(i < 4){
      //     $('.search-results1').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   } else if(i < 8) {
      //     $('.search-results2').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   } else if (i < 12) {
      //     $('.search-results3').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   } else if (i < 16) {
      //     $('.search-results4').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   } else if (i < 20) {
      //     $('.search-results5').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   } else if (i < 24) {
      //     $('.search-results6').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   } else (i < 28) {
      //     $('.search-results7').append('<img src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      //   }
      // }//for
      // #('.search-results1').addClass('show');
    }).catch (function(){
      //error message
    })
  }//else
})//click



//END
});
