$(function(){
  $(window).scroll(function(){

    // 상단으로부터 떨어진 거리값 계산
    let t = $(this).scrollTop();
    let productDistance = $('.sec2').offset().top;
    let newDistance = $('#new').offset().top;
    let bestDistance = $('#best').offset().top;

    // 애니메이션 효과

    // slideLeft
    let slideLeftAnimation = {
      animation: 'slideLeft 1s ease'
    };
    let slideLeftOutAnimation = {
      animation:'slideLeftOut 1s ease forwards'
    }

    // slideRight
    let slideRightAnimation = {
      animation:'slideRight 1s ease'
    };
    let slideRightOutAnimation = {
      animation:'slideRightOut 1s ease forwards'
    };    

    // product
    if(t>productDistance-500){
      $('.sec2').css(slideRightAnimation)
    }
    else{
      $('.sec2').css(slideRightOutAnimation)
    }

    // new
    if(t>newDistance-500){
      $('#new h2').css(slideLeftAnimation)
      $('#new .new_con').css(slideRightAnimation)
    }
    else{
      $('#new h2').css(slideLeftOutAnimation)
      $('#new .new_con').css(slideRightOutAnimation)
    }

    if(t>bestDistance-500){
      $('#best h2').css(slideLeftAnimation)
      $('#best .best_con').css(slideRightAnimation)
    }
    else{
      $('#best h2').css(slideLeftOutAnimation)
      $('#best .best_con').css(slideRightOutAnimation)
    }
  })
});