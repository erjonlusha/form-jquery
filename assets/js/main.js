$(document).ready(function(){
  var $btn = $('#submit');
  var $campo = $('.form-control');
    $('#well-done').hide();
  //Controllo che carattere @ si presente nell'email 
  $('#insEmail').focusout(function(){
    var insEmail = $('#insEmail').val(); 
    console.log('#insEmail '+insEmail);

    if(insEmail.search('@') < 0){
      console.log(insEmail.search('@') + ' For')
      $('#invalid_email').show(500).addClass('error');
      $(this).addClass('error');
      $(this).parent().find('.validation').show(500);
    }else{
      $('#invalid_email').hide(500).removeClass('error');
      $(this).parent().find('.validation').hide(500);
    }

  });

  $('#insPassword').focusout(function(){
    var insPassword = $('#insPassword').val();
    
    if($(this).val().length < 12){                                          // 1. Lunghezza minima 12.
      $('#val_lenght').show(500).addClass('error');
      $(this).addClass('error');
      $(this).parent().find('.validation').show(500)
    }else{
      $('#val_lenght').hide(500).removeClass('error');
      $(this).parent().find('.validation').hide(500);
    }
    
    if(IsEmail(insPassword)){
      $(this).show(500).addClass('error');
      return false;
    }

    
  });
  
  $('#confPassword').focusout(function(){                                   // Confronta password
    insPassword = $('#insPassword').val(); 
    var confPassword = $('#confPassword').val();

    if(insPassword != confPassword){
      $(this).addClass('error');
      $(this).parent().find('.validation').show(500);
    }
    
  });

  var well;
  $btn.on('click', function(){
    $campo.each(function(){
      var value = $(this).val();
      if (value == '') {
        $(this).addClass('error');
        $(this).parent().find('.validation').show(500);
      } else {
        $(this).removeClass('error');
        $(this).parent().find('.validation').hide(500);
      }
    });
    
    if(IsPass(insPassword)){
      $('#invalid_email').show(500).addClass('error');
      return true;
    }
    
    var errorCount = $('.error').length;
    if (errorCount == 0) {
      console.log('well done')
      well = true;
    }

    if(well) {
      console.log('well '+ well);
      $('.form').fadeOut(40);
      $('#well-done').show(800);
    } else {

    }
  });
  
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
  console.log(!(regex.test(email)));
  if(!regex.test(email)) {
    console.log('Funzione '+ email);
    return false;
  }else{
    return true;
  }
}


function IsPass(password) {
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;       //2. Una lettera maiuscola.
  console.log((passRegex.test(password)));                                       //3. Un numero.
  if(passRegex.test(password)) {                                                 //4. Un carattere speciale.
    console.log('Funzione '+ password);
    return true;
  }else{
    return false;
  }
}
