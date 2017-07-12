function navName(name) {
  let cappedName = name.charAt(0).toUpperCase() + name.slice(1)
  $('#profileName').text(`${cappedName}'s Art`)
}

$('#userForm').on('submit', function(event) {

  event.preventDefault()
  let values = $(this).serialize()

  $.ajax({
    url: 'http://localhost:3000/users',
    type: 'post',
    dataType: 'json',
    crossDomain: true,
    data: values
  }).done(function(data) {
    currentUser.name = data.username
    currentUser.id = data.id
    navName(currentUser.name)
    // call the next thing we need to do
    $("#container").load("partials/newCanvasButton.html")
  })

})
