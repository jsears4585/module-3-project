class Artwork {

  constructor(title, artwork_HTML, public_bool) {
    this.title = title
    this.artwork_HTML = artwork_HTML
    this.public_bool = public_bool
    this.user_id = currentUser.id
  }

  render() {
    return {
      title: this.title,
      artwork_HTML: this.artwork_HTML,
      public: this.public_bool,
      user_id: this.user_id,
      image: $('#screenshotDiv').text()
    }
  }
}

$('#saveCanvasForm').on('submit', function(event) {
  event.preventDefault()
  let newArtwork = new Artwork($('#title').val(),
  $('#paintTable').html(),
  $('#public').val())
  let values = newArtwork.render()
  $('#canvasContainer').append(`<img style='display: none' src='${values.image}'>`)
  $.ajax({
    url: 'http://localhost:3000/artworks',
    type: 'post',
    crossDomain: true,
    data: values
  })
})
