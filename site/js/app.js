//onReady
$(function(){

  $('#searchButton').on('click', function(){
    $.ajax({
      // workaround because data doesn't seem to work
      url: 'https://en.wikipedia.org/w/api.php' +
           '?action=query' +
           '&list=search' +
           '&srsearch=' + $('#searchText').val() +
           '&srprop=titlesnippet|snippet|redirecttitle|redirectsnippet' +
           '&format=json' +
           '&callback=?',
      dataType: 'json',
      headers: {
        'Api-User-Agent': 'DhooreFCCWikisearch'
      }
      // can't figure out why this isn't working
      // data: {
      //   format: 'json',
      //   action: 'query',
      //   list: 'search',
      //   srsearch: $('#searchText').val(),
      //   callback: 'cb'
      // }
    })
    .done(function(data){
      console.log('in done');
      console.log(data);
    });
  });

});
