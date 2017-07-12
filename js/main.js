const currentUser = {
  name: null,
  id: null
}

$(function() {

  color = $('.jscolor').val()

  $("#container").load("partials/authModal.html", function() {
    $('.ui.basic.modal')
      .modal({
        closable: false
      }).modal('show')
  })

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

  $('#gridToggle').on('click', function(event) {
    $('table#paintTable td').css('border', '1px solid #d6d6d6')
  })

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
    event.preventDefault()
    let x = $("#xVal").val() // td
    let y = $("#yVal").val() // tr
    let pixelSize = $("#pixelSize").val() // td width / height
    console.log(`x: ${x}, y: ${y}, pixelSize: ${pixelSize}`)
    createTable(x, y, pixelSize)
  })

  class Artwork {

    constructor(title, artwork_HTML, public_bool) {
      this.title = title
      this.artwork_HTML = artwork_HTML
      this.public_bool = public_bool
      this.username = currentUser
    }

    render() {
      return {
        title: this.title,
        artwork_HTML: this.artwork_HTML,
        public: this.public_bool,
        username: this.username}
    }
  }

  $('#save').on('click', function() {
    let newArtwork = new Artwork($('#title').val(),
    $('#paintTable').html(),
    $('#public').val())
    let values = newArtwork.render()
    $.ajax({
      url: 'http://localhost:3000/artworks',
      type: 'post',
      crossDomain: true,
      data: values
    })
  })
})
