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
    $(this).css('background-color', `#${color}`)

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#${color}`)
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
    $(this).css('background-color', `#${color}`)
    //attempt at enalarging brush serialize
    let tdClass = parseInt(this.className)
    let trClass = parseInt(this.parentElement.className)
      // //sides of current selected td
      $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `#${color}`)
      //under current selected td
      $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `#${color}`)
      $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `#${color}`)
    // end attempt enlarging brush size

    $('#paintTable td').on('mouseover', function(e) {
      $(this).css('background-color', `#${color}`)

      //attempt at enalarging brush serialize
      let tdClass = parseInt(this.className)
      let trClass = parseInt(this.parentElement.className)
        // //sides of current selected td
        $(`tr.${trClass} td.${tdClass+1}`).css('background-color', `#${color}`)
        //under current selected td
        $(`tr.${trClass+1} td.${tdClass}`).css('background-color', `#${color}`)
        $(`tr.${trClass+1} td.${tdClass+1}`).css('background-color', `#${color}`)
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
