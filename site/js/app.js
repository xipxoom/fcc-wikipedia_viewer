//onReady
$(function(){

  $('#searchButton').on('click', function(){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php' +
           '?action=opensearch' +
           '&search=' + $('#searchText').val() +
           '&format=json' +
           '&callback=?',
      dataType: 'json',
      headers: {
        'Api-User-Agent': 'DhooreFCCWikisearch'
      }
    })
    .done(function(json){
      displaySearchResults(json);
    });
  });

});


function displaySearchResults(results){
  console.log(results);
  var list = '<ul>';

  for (var i = 0, len = results[1].length; i < len; i++) {
    list += '<li><a href="' + results[3][i] + '">' + results[1][i] + '<a/><br>' + results[2][i] + '</li>';
  }
  list += '</ul>';
  $('main').html(list);
}
