// scroll event

$(function(){
  $(window).scroll(function(){
    let t = $(this).scrollTop();    
    let video1Distance = $('#video1').offset().top
    let video2Distance = $('#video2').offset().top
    let video3Distance = $('#video3').offset().top
    console.log(video1Distance);
  
    // video1
  
    if(t>video1Distance-500){
      $('#video1 h2').css({animation:'slideDown 1s ease'});
      $('#video1 iframe').css({animation:'slideUp 1s ease'});
      
    }
    else{
      $('#video1 h2').css({animation:'slideDownOut 1s ease forwards'});
      $('#video1 iframe').css({animation:'slideUpOut 1s ease forwards'});      
    }

    // video2

    if(t>video2Distance-400){      
      $('#video2 iframe').css({animation:'slideUp 1s ease'});
      $('#video2 h2').css({animation:'slideDown 1s ease'});
    }
    else{
      $('#video2 iframe').css({animation:'slideUpOut 1s ease forwards'});
      $('#video2 h2').css({animation:'slideDownOut 1s ease forwards'});
    }

  
    // video3

    if(t>video3Distance-400){      
      $('#video3 iframe').css({animation:'slideUp 1s ease'});
      $('#video3 h2').css({animation:'slideDown 1s ease'});
    }
    else{
      $('#video3 iframe').css({animation:'slideUpOut 1s ease forwards'});
      $('#video3 h2').css({animation:'slideDownOut 1s ease forwards'});
    }
  
  })
});