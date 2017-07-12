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


})
