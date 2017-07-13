//color stuff
globalColor = '#00ff02'
globalEye = 'off'

// Make actually toggle
$('#gridToggle').on('click', function(event) {
  event.preventDefault()
  $('table#paintTable td').toggleClass('gridBorder')
})

$('#showSaveModal').on('click', function(event){
  event.preventDefault()
  $('.ui.basic.modal.save-canvas').modal('show')
})

$('.basic').spectrum({
  color: '#00ff02',
  change: function(color) {
    globalColor = color.toHexString()
  }
})

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2)
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
}

function eyedrop() {
  $('table td').on('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    globalColor = rgb2hex( $(this).css('backgroundColor') )
    $('.sp-preview-inner').css('backgroundColor', globalColor)
  })
}

$('#eyedropper').on('click', function(event) {
  event.preventDefault()
  $(this).toggleClass('active')
  globalEye === 'off' ? globalEye = 'on' : globalEye = 'off'
  if (globalEye === 'on') {
    $('table').css('cursor','url(http://icons.iconarchive.com/icons/designcontest/outline/16/Eyedropper-icon.png), auto')
    $('table').off()
    eyedrop()
  } else {
    $('table').css('cursor','default')
    $('table td').off()
    setPaintListener()
  }
})
