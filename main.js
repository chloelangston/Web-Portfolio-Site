$(document).ready(function(){

  var $animation_elements = $('.animations-container');
  var $window = $(window);
  var $animation_left1 = $('.animations-left');
  var $animation_left2 = $('.animations-left2');
  var $animation_right1 = $('.animations-right');
  var $animation_right2 = $('.animations-right2');
  var $cloud1 = $('.cloud1');
  var $cloud2 = $('#cloud2');
  var $cloud3 = $('#cloud3');
  var $dot1 = $('.dot1');
  var $dot2 = $('.dot2');
  var $dot3 = $('.dot3');
  var $dot4 = $('.dot4');
  var $dot5 = $('.dot5');
  var $dot6 = $('.dot6');
  var $dot11 = $('.dot11');
  var $dot12 = $('.dot12');
  var $dot13 = $('.dot13');
  var $dot14 = $('.dot14');
  var $dot15 = $('.dot15');
  var $dot16 = $('.dot16');
  var $title = $('.title');
  var $dots = $('.dots');


  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    // console.log(window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var animSpeed = (window_top_position/20);

      var color1 = "rgba(0, 255, 0, 0.8)";
      var color2 = "rgba(255, 50, 255, 0.8)";
      var color3 = "pink";
      var color4 = "rgba(0, 255, 255, 0.8)";

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
        $dots.hover(function() {
          $dots.addClass('transition');
        });
        $title.css("opacity", (1-(animSpeed)/5)), "slow";

        $cloud1.css("left", (animSpeed) + "%");
        $cloud2.css("margin-right", (animSpeed) + "%");
        $cloud3.css("margin-right", ((22-animSpeed)*5)-110 + "%");

        $animation_left1.css("left", (animSpeed*3) + "%")
          .css("margin-top", (1-(animSpeed*2)) + "%");
        $animation_left2.css("left", (animSpeed+5) + "%")
          .css("margin-top", (1-animSpeed) + "%");


        console.log(784-($dots.offset().top));
        console.log($animation_left1.offset().top);

        // if((784-$dots.offset().top) < $animation_left1.offset().top){
        //   $dots.css("opacity", "1");
        // }


        // jQuery('.dots').each(function() {
        //   var currentElement = $(this);
        //   if((784-$currentElement.offset().top) < $animation_left1.offset().top){
        //     $currentElement.css("opacity", "1");
        //   }
        // });

          function randColor() {
            // create the rgb string
            var col =  "rgba("
            + randomColor(255) + ","
            + randomColor(255) + ","
            + randomColor(255) + ","
            + (Math.random()) + ")";

            //change the text color with the new random color
            return col;
          }


          function randomColor(num) {
            return Math.floor(Math.random() * num);
          }
          // var letters = '0123456789ABCDEF'.split('');
          // var color = '#';
          // for (var i = 0; i < 6; i++ ) {
          //   color += letters[Math.floor(Math.random() * 16)];
          // }
          // return color;





        if(animSpeed < window_height){
          $dot1.css("color", randColor());
          $dot2.css("color", randColor());
          $dot3.css("color", randColor());
          $dot4.css("color", randColor());
          $dot5.css("color", randColor());
          $dot6.css("color", randColor());
          $dot11.css("color", randColor());
          $dot12.css("color", randColor());
          $dot13.css("color", randColor());
          $dot14.css("color", randColor());
          $dot15.css("color", randColor());
          $dot16.css("color", randColor());
        }
        // if((Math.floor(animSpeed) % 3 == 0) && (Math.floor(animSpeed) % 2 == 0)){
        //   $dot1.css("color", color1);
        //   $dot2.css("color", color2);
        //   $dot3.css("color", color3);
        // }
        // else if(Math.floor(animSpeed) % 3 == 0){
        //   $dot1.css("color", color2);
        //   $dot2.css("color", color3);
        //   $dot3.css("color", color4);
        // }
        // else if(Math.floor(animSpeed) % 5 == 0){
        //   $dot1.css("color", color3);
        //   $dot2.css("color", color4);
        //   $dot3.css("color", color1);
        // }
        //
        // else {
        //   $dot1.css("color", color4);
        //   $dot2.css("color", color1);
        //   $dot3.css("color", color2);
        // }

        // console.log(animSpeed);
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

});
