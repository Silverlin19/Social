$(function(){
const body = document.getElementsByTagName("BODY")[0];
    $('.left').hover(
        function(){ $(body).addClass('left-body') },
       function(){ $(body).removeClass('left-body') }
    )
 $('.right').hover(
    function(){ $(body).addClass('right-body') },
    function(){ $(body).removeClass('right-body') }

)  
  });