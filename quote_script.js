$( document ).ready(function() {
  $("#submit_button").click(function(event){
    performSearch(event);
  });
});

function performSearch(event){
  var request;
  event.preventDefault();

  request =  $.ajax({
    url :'https://goquotes-api.herokuapp.com/api/v1/random?count=1',
    type : 'GET'
  });

  request.done(function(response){
    formatSearch(response);
  });
}

function formatSearch(jsonObject){
  var  quote = jsonObject.quotes[0].text;
  var author = jsonObject.quotes[0].author;

  $("#quote").text(quote);
  $("#author").text(author);
}
