$('#loadNewCanvasModal').on('click', function(event) {
  event.preventDefault()
  console.log('clicked')
  $("#container").load("partials/newCanvasModal.html", function() {
    $('.ui.basic.modal.new-canvas').modal('show')
  })
})
