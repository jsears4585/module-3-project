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

//PAINT / BRUSH
function setPaintListener() {
  $('#paintTable').on('mouseover', function(event) {
    console.log('ready to paint!')
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
    $('.brushSizes').removeClass('active')
    $('.dependentTools').removeClass('active')
    $(this).toggleClass('active')
    $('#brushMenuButton').addClass('active')
    $('#paintTable td').off()
    $('#paintTable').css('cursor','url("css/cursors/paintbrush_cursor.png"), auto')
    paint1()
  })

  $('#brush4').on('click', function(event){
    event.stopPropagation()
    $('.brushSizes').removeClass('active')
    $('.dependentTools').removeClass('active')
    $(this).toggleClass('active')
    $('#brushMenuButton').addClass('active')
    $('#paintTable td').off()
    $('#paintTable').css('cursor','url("css/cursors/paintbrush_cursor.png"), auto')
    paint4()
  })


  $('#brush9').on('click', function(event){
    event.stopPropagation()
    $('.brushSizes').removeClass('active')
    $('.dependentTools').removeClass('active')
    $(this).toggleClass('active')
    $('#brushMenuButton').addClass('active')
    $('#paintTable td').off()
    $('#paintTable').css('cursor','url("css/cursors/paintbrush_cursor.png"), auto')
    paint9()
  })
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

// function eraser() {
//   $('#paintTable td').on('mousedown', function(event) {
//     event.stopPropagation()
//     $(this).css('background-color', `#ffffff`)
//
//     $('#paintTable td').on('mouseover', function(e) {
//       $(this).css('background-color', `#ffffff`)
//     })
//   })
//   $('#paintTable td').on('mouseup', function(event) {
//     $('#paintTable td').off()
//     eraser()
//     event.stopPropagation()
//   })
// }

function eraser1() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', '#ffffff')

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', '#ffffff')
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    eraser1()
    event.stopPropagation()
  })
}

function eraser4() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', '#ffffff')
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', '#ffffff')
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', '#ffffff')
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', '#ffffff')
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#ffffff`)
      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', '#ffffff')
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', '#ffffff')
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', '#ffffff')
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    eraser4()
    event.stopPropagation()
  })
}

function eraser9() {
  $('#paintTable td').on('mousedown', function(event) {
    event.stopPropagation()
    $(this).css('background-color', `#ffffff`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass-1}`).css('background-color', '#ffffff')
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', '#ffffff')
      //above current selected td
      $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', '#ffffff')
      $(`tr.${trClass-1} td.${tdClass}`).css('background-color', '#ffffff')
      $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', '#ffffff')
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', '#ffffff')
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', '#ffffff')
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', '#ffffff')
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', '#ffffff')

      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass-1}`).css('background-color', '#ffffff')
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', '#ffffff')
        //above current selected td
        $(`tr.${trClass-1} td.${tdClass-1}`).css('background-color', '#ffffff')
        $(`tr.${trClass-1} td.${tdClass}`).css('background-color', '#ffffff')
        $(`tr.${trClass-1} td.${tdClass+1}`).css('background-color', '#ffffff')
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass-1}`).css('background-color', '#ffffff')
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', '#ffffff')
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', '#ffffff')
      // end attempt enlarging brush size
      e.stopPropagation()
    })
  })
  $('#paintTable td').on('mouseup', function(event) {
    $('#paintTable td').off()
    eraser9()

    event.stopPropagation()
  })
}


function eraserSizeListener(){
  $('#eraserMenuButton').on('mouseover', function(event){
      $('#eraserMenu').show()
  })

  $('#eraserMenu').on('mouseover', function(event){
      $('#eraserMenu').show()
  })

  $('#eraserMenu').on('mouseout', function(event){
      $('#eraserMenu').hide()
  })

  $('#eraser1').on('click', function(event){
    event.stopPropagation()
    $('.brushSizes').removeClass('active')
    $('.dependentTools').removeClass('active')
    $(this).toggleClass('active')
    $('#eraserMenuButton').addClass('active')
    $('#paintTable td').off()
    $('#paintTable').css('cursor','url("css/cursors/eraser_cursor.png"), auto')
    eraser1()
  })

  $('#eraser4').on('click', function(event){
    event.stopPropagation()
    $('.brushSizes').removeClass('active')
    $('.dependentTools').removeClass('active')
    $(this).toggleClass('active')
    $('#eraserMenuButton').addClass('active')
    $('#paintTable td').off()
    $('#paintTable').css('cursor','url("css/cursors/eraser_cursor.png"), auto')
    eraser4()
  })


  $('#eraser9').on('click', function(event){
    event.stopPropagation()
    $('.brushSizes').removeClass('active')
    $('.dependentTools').removeClass('active')
    $(this).toggleClass('active')
    $('#eraserMenuButton').addClass('active')
    $('#paintTable td').off()
    $('#paintTable').css('cursor','url("css/cursors/eraser_cursor.png"), auto')
    eraser9()
  })
}




//GRID TOGGLE
$('#gridToggle').on('click', function(event) {
  event.preventDefault()
  $('#gridToggle').toggleClass('active')
  $('#paintTable td').toggleClass('gridBorder')
})


//SAVE
$('#showSaveModal').on('click', function(event){
  event.preventDefault()
  $('.ui.basic.modal.save-canvas').modal('show')
})


brushSizeListener()
eyedropperListener()
eraserSizeListener()
