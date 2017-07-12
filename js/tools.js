//color stuff
let color = $('.jscolor').val()

$('.jscolor').on('blur', function(event) {
  color = ( $('.jscolor').val() )
  console.log(color)
})

$('#gridToggle').on('click', function(event) {
  $('table#paintTable td').css('border', '1px solid #d6d6d6')
})
