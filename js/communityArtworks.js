function printTitle(data) {
  data.forEach(function(artwork) {
    $('#communityArtworksList').append(`<li><a style='cursor: pointer;' data-id='${artwork.id}'>${artwork.title}</a></li>`)
  })
}
$(function() {
  $.ajax({
    url: 'http://localhost:3000/artworks',
    type: 'get',
    crossDomain: true
  }).done(function(data) {
    // $('#communityArtworksList').append(`<table>${data[0].artwork_HTML}</table>`)
    printTitle(data)
  }).done(function() {
    $('#communityArtworksList li a').on('click', function(event) {
      event.preventDefault()
      let artworkID = $(this).data('id')
      console.log('artworkID is: ' + artworkID)
      console.log($(this))
      $.get(`http://localhost:3000/artworks/${artworkID}`, function(data) {
        $('#imageHolder').empty()
        $('#titleHeader').text(data.title)
        $('#imageHolder').html(data.artwork_HTML)
        $('.ui.basic.modal.show-artwork').modal('show')
      })
    })
  })
})
