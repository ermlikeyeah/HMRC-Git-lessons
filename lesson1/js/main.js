//
// /*global $,jQuery,console,window*/
// (function ($) {
//     "use strict";
//     var slideshow = (function () {
//         var counter = 0,
//             i,
//             j,
//             slides =  $("section"),
//             slidesLen = slides.length - 1;
//         for (i = 0, j = 9999; i< slides.length; i += 1, j -= 1) {
//             $(slides[i]).css("z-index", j);
//         }
//         return {
//             startSlideshow: function () {
//                 window.setInterval(function () {
//                     if (counter === 0) {
//                         slides.eq(counter).fadeOut();
//                         counter += 1;
//                     } else if (counter === slidesLen) {
//                         counter = 0;
//                         slides.eq(counter).fadeIn(function () {
//                             slides.fadeIn();
//                         });
//                     } else {
//                         slides.eq(counter).fadeOut();
//                         counter += 1;
//                     }
//                 }, 2000);
//             }
//         };
//     }());
//     slideshow.startSlideshow();
// }(jQuery));

var counter = 0,
    i,
    j,
    slides =  $("section"),
    slidesLen = slides.length - 1;
for (i = 0, j = 9999; i< slides.length; i += 1, j -= 1) {
    $(slides[i]).css("z-index", j);
};

var slideNumber = 0;

function slideForward() {
  slides.eq(slideNumber).fadeOut();
  slideNumber = slideNumber + 1;
}

function slideBack() {
  slideNumber = slideNumber - 1;
  slides.eq(slideNumber).fadeIn();
}

$("#button-forward").click(function() {
  slideForward();
});

$("#button-back").click(function() {
  slideBack();
});

$("#showall").click(function() {
  $('.fullscreen').show();
  $('.fullscreen').removeClass('fullscreen');
  $(this).hide();
  $('#button-forward').hide();
  $('#button-back').hide();

});

$(document).keyup(function(e) {
  if (e.keyCode == 37) {
    slideBack();
  }
  if (e.keyCode == 39) {
    slideForward();
  }
});
