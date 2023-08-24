// 매장찾기

$(function(){
  $('.near').click(function(){
    $(this).addClass('on');
    $('.area').addClass('off');
  });

  $('.area').click(function(){
    $(this).removeClass('off');
    $('.near').removeClass('on');
  })

  $(window).scroll(function(){
    let t = $(this).scrollTop()    
    let area2Distance = $('#area2').offset().top;
    let area3Distance = $('#area3').offset().top;
    let area4Distance = $('#area4').offset().top;

    if(t>area2Distance-400){
      $('#area2 iframe').css({animation:'slideLeft 1s ease-in-out'})
      $('#area2 div').css({animation:'slideRight 1s ease-in-out'})
    }

    if(t>area3Distance-400){
      $('#area3 iframe').css({animation:'slideRight 1s ease-in-out'})
      $('#area3 div').css({animation:'slideLeft 1s ease-in-out'})
    }

    if(t>area4Distance-400){
      $('#area4 iframe').css({animation:'slideLeft 1s ease-in-out'})
      $('#area4 div').css({animation:'slideRight 1s ease-in-out'})
    }
    
  })
})