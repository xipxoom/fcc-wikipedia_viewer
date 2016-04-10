//onReady
$(function(){

  $('#searchButton').on('click', function(){
    if ($('#searchText').val()) {
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
    } else {
      window.open('http://en.wikipedia.org/wiki/Special:Random', '_blank');
    }
  });

});


function displaySearchResults(results){
  console.log(results);

  for (var i = 0, len = results[1].length; i < len; i++) {
    $("main ul").loadTemplate("template-searchResult.html", {
      link: results[3][i],
      title: results[1][i],
      text: results[2][i]
    }, {append: true});
  }
}
