//color stuff
globalColor = '#00ff02'

// Make actually toggle
$('#gridToggle').on('click', function(event) {
  event.preventDefault()
  $('table#paintTable td').toggleClass('gridBorder')
})

$('#showSaveModal').on('click', function(event){
  event.preventDefault()
  $('.ui.basic.modal.save-canvas').modal('show')
})

$(".basic").spectrum({
  color: "#00ff02",
  change: function(color) {
    globalColor = color.toHexString()
  }
});
