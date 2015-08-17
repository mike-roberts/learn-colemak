(function(){
  var sentence = $('#current-sentence');
  console.log(sentence.length);
  var keyboard = $('#keyboard');
  $('.typer').on('keydown', function(e) {
    if (e.keyCode == 16) {
      keyboard.find('.key .regular').hide();
      keyboard.find('.key .shift').show();
    }
    else {
      keyboard.find('.key'+e.keyCode).addClass('selected');
    }
  });
  $('.typer').on('keyup', function(e) {
    if (e.keyCode == 16) {
      keyboard.find('.key .regular').show();
      keyboard.find('.key .shift').hide();
    }
    else {
      if ($(this).val().length == sentence.text().length) {
          // console.log('the values are equal.');
          $(this).attr('disabled', 'disabled');
      }
      keyboard.find('.key'+e.keyCode).removeClass('selected');
    }
  });
})(jQuery)
