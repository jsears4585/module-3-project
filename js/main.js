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

  function styleLink(thisLink) {
    $('nav a').each(function() {
      $(this).removeClass('active')
    })
    thisLink.addClass('active')
  }

  $("#userArtworks").on('click', function() {
    styleLink($(this))
    $("#container").load("partials/userArtworks.html")
  })

  $("#communityArtworks").on('click', function() {
    styleLink($(this))
    $("#container").load("partials/communityArtworks.html")
  })

  $("#workspaceLink").on('click', function() {
    styleLink($(this))
    $("#container").load("partials/newCanvasButton.html")
  })

})
