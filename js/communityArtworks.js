function printTitle(data) {
  data.forEach(function(artwork) {
    $('#communityArtworksList').append(`<img class="grid-item" src='${artwork.image}'>`)
    console.log(artwork)
  })
}
$(function() {
  let i = 1
  $.ajax({
    url: `http://localhost:3000/artworks/page/${i}`,
    type: 'get',
    crossDomain: true
  }).done(function(data) {
    i++
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
