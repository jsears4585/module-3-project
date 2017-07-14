//CURRENT SELECTED COLOR
let globalColor = '#00ff02'

//COLOR SELECTOR
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

//SHARED ERASER AND BRUSH CODE
function brushPrep(action, size){
  $('.brushSizes').removeClass('active')
  $('.dependentTools').removeClass('active')
  $(`#${action}MenuButton`).addClass('active')
  $('#paintTable td').off()
  $(`#${action}${size}`).toggleClass('active')
  $('#paintTable').css('cursor',`url('css/cursors/${action}_cursor.png'), auto`)
}

function brush1(color) {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `${color}`)

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `${color}`)
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    brush1()
    event.stopPropagation()
  })
}

function brush4(color) {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `${color}`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${color}`)
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${color}`)
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${color}`)
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `${color}`)
      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${color}`)
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${color}`)
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${color}`)
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    brush4()
    event.stopPropagation()
  })
}

function brush9(color) {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `${color}`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass-1}`).css('background-color', `${color}`)
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${color}`)
      //above current selected td
      $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', `${color}`)
      $(`tr.${trClass-1} td.${tdClass}`).css('background-color', `${color}`)
      $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', `${color}`)
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', `${color}`)
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${color}`)
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${color}`)
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `${color}`)

      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass-1}`).css('background-color', `${color}`)
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `${color}`)
        //above current selected td
        $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', `${color}`)
        $(`tr.${trClass-1} td.${tdClass}`).css('background-color', `${color}`)
        $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', `${color}`)
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', `${color}`)
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `${color}`)
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `${color}`)
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    brush9()

    event.stopPropagation()
  })
}



//PAINT BRUSH
function brushSizeListener(){
  $('.brushes').on('mouseover', function(event){
      $('#brushMenu').show()
  })

  $('.brushes').on('mouseout', function(event){
      $('#brushMenu').hide()
  })

  $('#brush1').on('click', function(event){
    event.stopPropagation()
    brushPrep('brush','1')
    brush1(globalColor)
  })

  $('#brush4').on('click', function(event){
    event.stopPropagation()
    brushPrep('brush','4')
    brush4(globalColor)
  })


  $('#brush9').on('click', function(event){
    event.stopPropagation()
    brushPrep('brush', '9')
    brush9(globalColor)
  })

  //load default brush
  brushPrep('brush','1')
  brush1(globalColor)
}

//EYEDROPPER
function eyedrop() {
  $('#paintTable td').on('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    globalColor = rgb2hex( $(this).css('backgroundColor') )
    $('.sp-preview-inner').css('backgroundColor', globalColor)
  })
}

function eyedropperListener(){
  $('#eyedropper').on('click', function(event) {
    event.preventDefault()
    $('#paintTable td').off()
    $('.dependentTools').removeClass('active')
    $('.brushSizes').removeClass('active')
    $(this).toggleClass('active')
    $('#paintTable').css('cursor','url("css/cursors/eyedropper_cursor.png"), auto')
      $('#paintTable').off()
      eyedrop()
  })
}

//ERASER
function eraserSizeListener(){
  $('.erasers').on('mouseover', function(event){
      $('#eraserMenu').show()
  })

  $('.erasers').on('mouseout', function(event){
      $('#eraserMenu').hide()
  })

  $('#eraser1').on('click', function(event){
    event.stopPropagation()
    brushPrep('eraser','1')
    brush1('#ffffff')
  })

  $('#eraser4').on('click', function(event){
    event.stopPropagation()
    brushPrep('eraser','4')
    brush4('#ffffff')
  })


  $('#eraser9').on('click', function(event){
    event.stopPropagation()
    brushPrep('eraser','9')
    brush9('#ffffff')
  })
}

//GRID TOGGLE
$('#gridToggle').on('click', function(event) {
  event.preventDefault()
  $('#gridToggle').toggleClass('active')
  $('#paintTable td').toggleClass('gridBorder')
})

//CLEAR CANVAS
$('#clearCanvas').on('click', function(event) {
  event.preventDefault()
  $('#paintTable td').css('background-color', '#ffffff')
})


//SAVE
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

brushSizeListener()
eyedropperListener()
eraserSizeListener()
