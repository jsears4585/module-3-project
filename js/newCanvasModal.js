function paint() {
  $('#paintTable td').on('mouseover', function(e) {
    $(this).css('background-color', `${globalColor}`)
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

  $("#canvasContainer").html(t)
  $('#paintTable td').css({
    width: `${pixelSize}px`,
    height: `${pixelSize}px`,
    background: 'white'
  })
  setPaintListener()
}

$('#canvasDimensionsForm').on('submit', function(event) {
  event.preventDefault()
  let x = $("#xVal").val() // td
  let y = $("#yVal").val() // tr
  let pixelSize = $("#pixelSize").val() // td width / height
  console.log(`x: ${x}, y: ${y}, pixelSize: ${pixelSize}`)
  $("#container").load("partials/workspace.html", function() {
    $("#tools").load("partials/tools.html")
    $("#saveCanvasModalHTML").load("partials/saveCanvasModal.html")

    createTable(x, y, pixelSize)
  })
})
