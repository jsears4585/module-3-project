//color stuff
color = $('.jscolor').val()

function update(jscolor) {
  colorWithHash = '#' + jscolor
  document.getElementById('colorSquare').style.backgroundColor = colorWithHash
  color = jscolor.valueElement.defaultValue
  console.log(jscolor)
}

$('#colorPicker').on('click', function(event) {
  document.getElementById('picker').jscolor.show()

  // let box = $('.auth-modal').parent().next()
  // box.css({
  //   position: 'absolute',
  // 	top: '200px',
  // 	left: '200px'
  // })
})

$('#gridToggle').on('click', function(event) {
  $('table#paintTable td').css('border', '1px solid #d6d6d6')
})

$('#showSaveModal').on('click', function(event){
  event.preventDefault()
  $('.ui.basic.modal.save-canvas').modal('show')
})
