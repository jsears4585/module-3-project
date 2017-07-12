const currentUser = {
  name: null,
  id: null
}

$(function() {

  $("#container").load("partials/signInModal.html", function() {
    $('.ui.basic.modal.auth-modal')
      .modal({
        closable: false
      }).modal('show')
  })

  class Artwork {

    constructor(title, artwork_HTML, public_bool) {
      this.title = title
      this.artwork_HTML = artwork_HTML
      this.public_bool = public_bool
      this.username = currentUser
    }

    render() {
      return {
        title: this.title,
        artwork_HTML: this.artwork_HTML,
        public: this.public_bool,
        username: this.username}
    }
  }

  $('#save').on('click', function() {
    let newArtwork = new Artwork($('#title').val(),
    $('#paintTable').html(),
    $('#public').val())
    let values = newArtwork.render()
    $.ajax({
      url: 'http://localhost:3000/artworks',
      type: 'post',
      crossDomain: true,
      data: values
    })
  })
})
