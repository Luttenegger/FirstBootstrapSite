// JavaScript Document
$(document).ready(function () {
$('#info').click(function (e) {
  e.preventDefault()
  $('#message').html('<div class="alert alert-info fade in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button>Hello</div>');
})

$('#info1').click(function (e) {
  e.preventDefault()
  $('#message1').html('<div class="alert alert-info fade in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button>My name</div>');
})

$('#info2').click(function (e) {
  e.preventDefault()
  $('#message2').html('<div class="alert alert-info fade in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button>Is Eric</div>');
})

});