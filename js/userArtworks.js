function printTitle(data) {
  $('#userArtworksList').append('<div style="width: 20%" class="grid-sizer"></div>')
  data.forEach(function(artwork) {
    $('#userArtworksList').append(`<div style="width: 20%" class="grid-item"><h3>${artwork.title}</h3><img src='${artwork.image}' alt='${artwork.title}'></div>`)
    console.log(artwork)
  })
  var $grid = $('.masonryGrid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 200,
    transitionDuration: '1s',
    stagger: 30
  })
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout')
  })
}
$(function() {
  $('#userArtworksList').empty()
  $.ajax({
    url: `http://localhost:3000/artworks/user/${currentUser.id}`,
    type: 'get',
    crossDomain: true
  }).done(function(data) {
    printTitle(data)
  })
})
