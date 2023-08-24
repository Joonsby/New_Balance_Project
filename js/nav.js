$(function(){
  $('.ham_menu').click(function(){
    $('.menu_on').addClass('on');
  });
  $('.close').click(function(){
    $('.menu_on').removeClass('on');
  });  

  var w=$(window).outerWidth();
  if(w>=1024){
    $('.menu_on').addClass('on');
  }
  else{
    $('.menu_on').removeClass('on');
  }

  $(window).resize(function(){
    var w=$(window).outerWidth();
    if(w>=1024){
      $('.menu_on').addClass('on');
    }
    else{      
      $('.menu_on').removeClass('on');
    }
  });
})