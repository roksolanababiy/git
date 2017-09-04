$(function(){
  $('input[type=submit').click(sendData);
})

function sendData(e) {
  e.preventDefault();
  
  if (!$('form')[0].checkValidity()) {
    $('#incorrect').show();
    return;
  }
  
  $.ajax({
    url: "https://formspree.io/roksi.babiy@gmail.com", 
    method: "POST",
    data: {
      name: $('#user-first name').val(),
        lastname: $('#user-last-name').val(),
      email: $('#user-email').val(),
      password:$('#user-password').val(),
      age: $('#age').val(),
      gender: $('.gender').val(),
      youdo: $('.youdo').val()
    },
    dataType: "json"
})
    .done(function(){
    $('form')[0].reset();
    $('#thanks').show();
  })
}
