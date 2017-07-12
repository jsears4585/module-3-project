function printTitle(data) {
  data.forEach(function(artwork) {
    $('#userArtworksList').append(`<li><a style='cursor: pointer;' data-id='${artwork.id}'>${artwork.title}</a></li>`)
  })
}
$(function() {
  $.ajax({
    url: `http://localhost:3000/users/${currentUser.id}`,
    type: 'get',
    crossDomain: true
  }).done(function(data) {
    printTitle(data.artworks)
  }).done(function() {
    $('#userArtworksList li a').on('click', function(event) {
      event.preventDefault()
      let artworkID = $(this).data('id')
      console.log('artworkID is: ' + artworkID)
      console.log($(this))
      $.get(`http://localhost:3000/artworks/${artworkID}`, function(data) {
        $('#imageHolder-user').empty()
        $('#titleHeader-user').text(data.title)
        $('#imageHolder-user').append(data.artwork_HTML)
        $('.ui.basic.modal.show-user-artwork').modal('show')
      })
    })
  })
})
