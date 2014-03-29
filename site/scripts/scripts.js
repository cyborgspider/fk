var signedUpStatus = false;

function removeSignup(signedUpStatus){
  $('.section-signup').fadeOut(600);
  $('.section-video').removeClass('hide');
  if (!signedUpStatus){
    $('.section-signup-secondary').slideDown(1000,'easeOutBounce');
  }else{

  }
}

$(function(){

  $('#submit-main').click(function(){
    signedUpStatus = true;
    $('.pre-signup').fadeOut(300);
    $('.post-signup').fadeIn(300);
  });

  $('.btn-watch-video').click(function(){
    removeSignup(signedUpStatus)
  })

  $('.btn-close').click(function(){
     removeSignup(signedUpStatus);
  });

})