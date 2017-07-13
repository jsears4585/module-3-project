//color stuff
globalColor = '#ab2567'

// Make actually toggle
$('#gridToggle').on('click', function(event) {
  $('table#paintTable td').css('border', '1px solid #d6d6d6')
})

$('#showSaveModal').on('click', function(event){
  event.preventDefault()
  $('.ui.basic.modal.save-canvas').modal('show')
})

$(".basic").spectrum({
    color: "#f00",
    change: function(color) {
        globalColor = color.toHexString()
    }
});
