$(document).ready(function(){
  var $btn = $('#submit');
  var $campo = $('.form-control');
  var insPassword = $('#insPassword').val();
  var confPassword;
  $('#well-done').hide();

  //Controllo che carattere @ si presente nell'email 
  $('#insEmail').focusout(function(){
    var insEmail = $('#insEmail').val(); 
    console.log('#insEmail '+insEmail);

    if(insEmail.search('@') < 0){
      console.log(insEmail.search('@') + ' For')
      $('#invalid_email').show(500);
      $(this).addClass('error');
      $(this).parent().find('.validation').show(500);
    }else{
      $('#invalid_email').hide(500).removeClass('error');
      $(this).parent().find('.validation').hide(500);
    }

  });

  $('#insPassword').focusout(function(){
    // Quando si passa all'input successivo la funzione controlla che la lunghezza della password sia di almeno 12 caratteri.
    if($(this).val().length < 12){                                          // 1. Lunghezza minima 12. 
      $('#val_lenght').show(500);
      $(this).addClass('error');
      $(this).parent().find('.validation').show(500)
    }else{
      $('#val_lenght').hide(500).removeClass('error2');
      $(this).parent().find('.validation').hide(500);
    }
        
  });
  
  $('#confPassword').focusout(function(){                                   
    // Confronta il primo input con il secondo nel caso fossero diversi da errore:
    insPassword = $('#insPassword').val(); 
    confPassword = $('#confPassword').val();
    if(insPassword != confPassword){
      $(this).addClass('error');
      $(this).parent().find('.validationP').show(500);
    }
  });

  
  var well = false; //Imposto well su false in modo che di default ferma il processo.
  console.log('well '+ well);
  $btn.on('click', function(){

    $campo.each(function(){
      //Controlla che i campi non siano vuoti
      var value = $(this).val();
      if (value == '') {
        $(this).addClass('error');
        $(this).parent().find('.validation').show(500);
      } else {
        $(this).removeClass('error');
        $(this).parent().find('.validation').hide(500);
      }
    });

    var errorCount = $('.error').length;
    // Controllo che non ci siano errori
    if (errorCount == 0) {
      // console.log('well done')
      well = true; 
    }
    
    if(!IsPass(insPassword)){
      //Se la password deve rispettare i seguenti parametri lettere miuscole e minuscole, numeri e caratteri speciali.
      $('.validation2').show(500);
      well = true;
      return true;
    }

    if (insPassword !== confPassword) {
      // se le due password non sono identiche mostra l'errore
      $('.validation2').show(500);
      well = false;
      return false;
    }

    if(well) {
      $('.form').fadeOut(40);
      $('#well-done').show(800);
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
  var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gm;        
  var a = passRegex.test(password);                                               //2. Una lettera maiuscola.
  // console.log(a);                                                              //3. Un numero.
  if(a) {                                                                         //4. Un carattere speciale.
    return  well = true;
  } else {
    return false;
  }       
}
