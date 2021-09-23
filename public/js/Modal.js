//Recipe Modal
$(document).ready(function(){

  $(".tabs").click(function(){

    $(".tabs").removeClass("active");
    $(".tabs h5").removeClass("font-weight-bold");
    $(".tabs h5").addClass("text-muted");
    $(this).children("h5").removeClass("text-muted");
    $(this).children("h5").addClass("font-weight-bold");
    $(this).addClass("active");

    current_fs = $(".active");

    next_fs = $(this).attr('id');
    next_fs = "#" + next_fs + "1";

    $("fieldset").removeClass("show");
    $(next_fs).addClass("show");

    current_fs.animate({}, {
      step: function() {
      current_fs.css({
        'display': 'none',
        'position': 'relative'
      });
      next_fs.css({
        'display': 'block'
      });
      }
    }); 
  });
});
// Sign Form Modal
$(window, document, undefined).ready(function() {

  $('.input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });
  
  });


$('#tab1').on('click' , function(){
    $('#tab1').addClass('login-shadow');
   $('#tab2').removeClass('signup-shadow');
});

$('#tab2').on('click' , function(){
    $('#tab2').addClass('signup-shadow');
   $('#tab1').removeClass('login-shadow');

//Categorize Post
  function Categorize () {
    var element = document. getElementById("userpost");
    element.parentNode.removeChild(element);
  }
});