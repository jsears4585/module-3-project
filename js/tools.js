//color stuff
globalColor = '#00ff02'

// Make actually toggle
$('#gridToggle').on('click', function(event) {
  $('table#paintTable td').css('border', '1px solid #d6d6d6')
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
