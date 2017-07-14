function printTitle(data) {
  $('#communityArtworksList').append('<div style="width: 20%" class="grid-sizer"></div>')
  data.forEach(function(artwork) {
    $('#communityArtworksList').append(`<div style="width: 20%; margin-bottom: 55px;" class="grid-item"><h3>${artwork.title}</h3><img style="max-width: 200px;" src='${artwork.image}' alt='${artwork.title}'></div>`)
    console.log(artwork)
  })
  var $grid = $('.masonryGrid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 140,
    transitionDuration: '1s',
    stagger: 10
  })
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout')
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
