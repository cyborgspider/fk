var signedUpStatus = false;

function removeSignup(signedUpStatus){
  $('.section-signup').fadeOut(600);
  $('.section-video').show();
  if (!signedUpStatus){
    $('.section-signup-secondary').animate({height:'244px'}, 600,'easeOutBounce');
  }else{

  }
}


$(function(){

  //Adjust this code to return true if user information is validated properly
  $('#submit-main').click(function(){
    signedUpStatus = true;
    $('.pre-signup').fadeOut(300);
    $('.post-signup').fadeIn(300);
  });

  //User clicks on Watch Video button after signing up
  $('.btn-watch-video').click(function(){
    removeSignup(signedUpStatus)
  })

  //User clicks on X button, avoiding signup
  $('.btn-close').click(function(){
     removeSignup(signedUpStatus);
  });

  //Activate the modal logic
  $('.slideshow-link').colorbox({rel:'gallery',width:'923px',height:'534px',current:'',transition:'none'})


  //RESPONSIVE: Display menu when clicked. Appearance dictated by CSS
  $('#mobile-toggle').click(function(){
    $(this).children('a').toggleClass('active');
    $('.nav-mobile').toggleClass('active')
  });

  $('.nav-mobile').on('click','a',function(){
    $('#mobile-toggle').children('a').toggleClass('active');
    $('.nav-mobile').toggleClass('active');
  });

  //We need to turn off modals when screen size is too small.
  $(window).resize(function(){
    if ($(this).width() < 401){
      $('.slideshow-link').removeClass('cboxElement')
    }else{
      $('.slideshow-link').addClass('cboxElement')
    }
  });
  //We need to run the resize event upon page load, not just when the user resizes.
  $(window).resize();


})