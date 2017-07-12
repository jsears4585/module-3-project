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

  $("#userArtworks").on('click', function() {
    $("#container").load("partials/userArtworks.html")
  })

  $("#communityArtworks").on('click', function() {
    $("#container").load("partials/communityArtworks.html")
  })

})
