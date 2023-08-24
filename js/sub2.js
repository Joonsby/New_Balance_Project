// scroll event

$(function(){
  $(window).scroll(function(){

    // 상단으로부터 떨어진 거리
    let t = $(this).scrollTop();    
    let kidsDistance = $('#kids').offset().top
    let eastlogueDistance = $('#eastlogue').offset().top


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

    // fade
    let fadeInAnimation = {
      animation:'fadeIn 2s ease'
    };
    let fadeOutAnimation = {
      animation:'fadeOut 1s ease forwards'
    };

    // zero

    if(t>100){
      $('#zero h2').css(slideLeftAnimation)
      $('#zero h3').css(slideRightAnimation)
      $('#zero p').css(fadeInAnimation)
    }
    else{
      $('#zero h2').css(slideLeftOutAnimation)
      $('#zero h3').css(slideRightOutAnimation)
      $('#zero p').css(fadeOutAnimation)
    }

    // kids

    if(t>kidsDistance-300){
      $('#kids h2').css(slideLeftAnimation)
      $('#kids h3').css(slideRightAnimation)
      $('#kids p').css(fadeInAnimation)
    }

    else{
      $('#kids h2').css(slideLeftOutAnimation)
      $('#kids h3').css(slideRightOutAnimation)
      $('#kids p').css(fadeOutAnimation)
    }

    // eastlogue

    if(t>eastlogueDistance-500){
      $('#eastlogue h2').css(slideLeftAnimation)
      $('#eastlogue h3').css(slideRightAnimation)
      $('#eastlogue p').css(fadeInAnimation)
    }

    else{
      $('#eastlogue h2').css(slideLeftOutAnimation)
      $('#eastlogue h3').css(slideRightOutAnimation)
      $('#eastlogue p').css(fadeOutAnimation)
    }
  })
});