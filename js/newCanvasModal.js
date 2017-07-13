function paint() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `#${color}`)

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#${color}`)
    })
  })
}

function paint9() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `#${color}`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass-1}`).css('background-color', `#${color}`)
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `#${color}`)
      //above current selected td
      $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', `#${color}`)
      $(`tr.${trClass-1} td.${tdClass}`).css('background-color', `#${color}`)
      $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', `#${color}`)
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', `#${color}`)
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `#${color}`)
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `#${color}`)
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#${color}`)

      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass-1}`).css('background-color', `#${color}`)
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `#${color}`)
        //above current selected td
        $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', `#${color}`)
        $(`tr.${trClass-1} td.${tdClass}`).css('background-color', `#${color}`)
        $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', `#${color}`)
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', `#${color}`)
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `#${color}`)
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `#${color}`)
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
}

function setPaintListener() {
  $('#paintTable').on('mouseover', function(event) {
    paint()
    console.log('ready to paint!')
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
    t += `<tr class='${i}'>`
    for(let j=0; j<x; j++) {
      t += `<td class='${j}'></td>`
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
