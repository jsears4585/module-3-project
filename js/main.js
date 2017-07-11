$(function() {

  let color = $('.jscolor').val()

  $('.jscolor').on('blur', function(event) {
    color = ( $('.jscolor').val() )
    console.log(color)
  })

  function paint() {
    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#${color}`)
      e.stopPropagation()
    })
  }

  function setPaintListener() {
    $('#paintTable').on('mousedown', function(event) {
      paint()
      event.stopPropagation()
    })
    $('#paintTable').on('mouseup', function(event) {
      $('#paintTable td').off()
      event.stopPropagation()
    })
  }

  function createTable(x, y, pixelSize) {
    $('#pixelForm').hide()
    $('#colorPicker').show()
    let t = "<table id='paintTable'><thead></thead><tbody>"
    for(let i=0; i<y; i++) {
      t += "<tr>"
      for(let j=0; j<x; j++) {
        t += "<td></td>"
      }
      t += "</tr>"
    }
    t += "</tbody></table>"
    $("#paintContainer").html(t)
    $('#paintTable td').css({
      width: `${pixelSize}px`,
      height: `${pixelSize}px`
    })
    setPaintListener()
  }

  $('#pixelForm').on('submit', function(event) {
    let x = $("#xVal").val() // td
    let y = $("#yVal").val() // tr
    let pixelSize = $("#pixelSize").val() // td width / height
    console.log(`x: ${x}, y: ${y}, pixelSize: ${pixelSize}`)
    createTable(x, y, pixelSize)
    event.preventDefault()
    event.stopPropagation()
  })

})
