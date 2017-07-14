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
  $('#paintTable').css('border', '0')
  html2canvas(document.querySelector('#paintTable'), {
    onrendered: function(canvas) {
      let image = canvas.toDataURL('image/png')
      $('#screenshotDiv').text(image)
      $('#paintTable').css('border', '1px solid #222')
    }
  })
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

function eraser() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `#ffffff`)

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#ffffff`)
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    eraser()
    event.stopPropagation()
  })
}

function paint1() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `${globalColor}`)

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `${globalColor}`)
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    paint1()
    event.stopPropagation()
  })
}

function paint4() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `${globalColor}`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${globalColor}`)
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${globalColor}`)
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${globalColor}`)
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `${globalColor}`)

      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${globalColor}`)
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${globalColor}`)
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${globalColor}`)
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    paint4()
    event.stopPropagation()
  })
}

function paint9() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `${globalColor}`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass-1}`).css('background-color', `${globalColor}`)
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${globalColor}`)
      //above current selected td
      $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', `${globalColor}`)
      $(`tr.${trClass-1} td.${tdClass}`).css('background-color', `${globalColor}`)
      $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', `${globalColor}`)
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', `${globalColor}`)
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${globalColor}`)
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${globalColor}`)
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `${globalColor}`)

      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass-1}`).css('background-color', `${globalColor}`)
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${globalColor}`)
        //above current selected td
        $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', `${globalColor}`)
        $(`tr.${trClass-1} td.${tdClass}`).css('background-color', `${globalColor}`)
        $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', `${globalColor}`)
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', `${globalColor}`)
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${globalColor}`)
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${globalColor}`)
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    paint9()

    event.stopPropagation()
  })
}

function setPaintListener() {
  $('#paintTable').on('mouseover', function(event) {
    console.log('ready to paint!')
    event.stopPropagation()
  })
}

function eraserListener(){
  $('#eraser').on('click', function(event){
    event.stopPropagation()
    $('#paintTable td').off()
    eraser()
  })
}

function brushSizeListener(){
  $('#brushMenuButton').on('mouseover', function(event){
      $('#brushMenu').show()
  })

  $('#brushMenu').on('mouseover', function(event){
      $('#brushMenu').show()
  })

  $('#brushMenu').on('mouseout', function(event){
      $('#brushMenu').hide()
  })

  $('#brush1').on('click', function(event){
    event.stopPropagation()
    $('#paintTable td').off()
    paint1()
  })

  $('#brush4').on('click', function(event){
    event.stopPropagation()
    $('#paintTable td').off()
    console.log('paintTable TD .off')
    paint4()
  })


  $('#brush9').on('click', function(event){
    event.stopPropagation()
    $('#paintTable td').off()
    paint9()
  })
}

setPaintListener()
brushSizeListener()
eraserListener()
