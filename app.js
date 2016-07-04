$(function(){

//Menu Items
$('.label').on('click', function(event){

  event.preventDefault();

  $(this).parent().find('div:first').slideToggle();
})


//RANDOM GIFS
$('#gif-button').on('click', function(event){

  event.preventDefault();

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
$('#search-button').on('click', function(event){

  event.preventDefault();

  var tempTag = $('#search-tag').val();

  $('.search-results').empty();

  if (tempTag == ''){   //if there is no input, then dispaly a message asking for input
      $('.search-results').append('<p>Please enter a search query</p>');
  } else {    //return gifs with inputed tag
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search?q=' + tempTag + '&api_key=dc6zaTOxFJmzC&limit=15&offset=0',
    }).then(function(data){
      for (i = 0; i < 15; i++) {
        $('.search-results').append('<img class="img" src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      };
    }).catch (function(){
      //error message
    })
  }//else
})//click


$('#trending-button').on('click', function(event){

  event.preventDefault();

  $('.trending-results').empty();

  //return top 10 trending GIFs
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=10',
    }).then(function(data){
      for (i = 0; i < 10; i++) {
        $('.trending-results').append('<img class="img" src="' + data.data[i].images.downsized_large.url + '" alt="gif" />');
      };
    }).catch (function(){
      //error message
    })
})//click



//END
});
