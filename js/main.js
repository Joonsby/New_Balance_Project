// rec slider

$(document).ready(function(){
  $('.product').slick({
    dots: true,  
    infinite: true,
    speed: 300,  
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  
  // new slider
  
  $('.new_product').slick({
    dots: true,  
    infinite: true,
    speed: 300,  
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  
  // shop slider
  
  $('.shop_product').slick({  
    infinite: false,  
    slidesToShow: 3,  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2
        }
      }
    ]
  });
})


// scroll event

$(function(){
    $(window).scroll(function(){

      // 상단으로부터 떨어진 거리값 계산
      let t = $(this).scrollTop();
      let bestDistance = $('#best').offset().top;
      let newDistance = $('#new').offset().top
      let shopDistance = $('#shop').offset().top
      let snsDistance = $('#sns').offset().top

      // 애니메이션 효과

      // stroke
      let strokeAnimation = {
        animation:'stroke 1s linear forwards'
      };
      let strokeOutAnimation = {
        animation:'strokeOut 1s linear forwards'
      };

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

      // slideTop
      let slideTopAnimation = {
        animation:'slideTop 1s ease'
      };
      let slideTopOutAnimation = {
        animation:'slideTopOut 1s ease forwards'
      };

      // fade
      let fadeInAnimation = {
        animation:'fadeIn 1s ease'
      };
      let fadeOutAnimation = {
        animation:'fadeOut 1s ease forwards'
      };
      

      // best

      if(t>bestDistance-400){
        $('#best svg path').css(strokeAnimation)
        $('#best svg path:eq(1)').css({animationDelay:'0.1s'})
        $('#best svg path:eq(2)').css({animationDelay:'0.2s'})
        $('#best svg path:eq(3)').css({animationDelay:'0.3s'})
        $('#best .best_con:eq(0)').css(slideLeftAnimation)
        $('#best .best_con:eq(1)').css(fadeInAnimation)
        $('#best .best_con:eq(2)').css(slideRightAnimation)
      }
      else{        
        $('#best svg path').css(strokeOutAnimation)        
        $('#best .best_con:eq(0)').css(slideLeftOutAnimation)
        $('#best .best_con:eq(1)').css(fadeOutAnimation)
        $('#best .best_con:eq(2)').css(slideRightOutAnimation)
      }

      if(t>bestDistance-200){        
        $('#best .best_con:eq(3)').css(fadeInAnimation)
        $('#best .best_con:eq(4)').css(slideRightAnimation)
      }
      else{        
        $('#best .best_con:eq(3)').css(fadeOutAnimation)
        $('#best .best_con:eq(4)').css(slideRightOutAnimation)
      }

      // new

      // fadeInAnimation 소요시간 재할당
      fadeInAnimation = {
        animation:'fadeIn 0.7s ease-in-out'
      }

      if(t>newDistance-300){        
        $('#new h2').css(slideTopAnimation)
        $('#new .new_product').css(fadeInAnimation)
      }
      else{        
        $('#new h2').css(slideTopOutAnimation)
        $('#new .new_product').css(fadeOutAnimation)
      }

      // shop      

      if(t>shopDistance-300){        
        $('#shop h2').css(slideLeftAnimation)
        $('#shop .shop_product').css(slideRightAnimation)
      }
      else{        
        $('#shop h2').css(slideLeftOutAnimation)
        $('#shop .shop_product').css(slideRightOutAnimation)
      }

      // sns

      if(t>snsDistance-500){
        $('#sns h2').css(slideRightAnimation)
        $('#sns .sns_con').css(slideLeftAnimation)
      }
      else{        
        $('#sns h2').css(slideRightOutAnimation)
        $('#sns .sns_con').css(slideLeftOutAnimation)
      }

    });
})