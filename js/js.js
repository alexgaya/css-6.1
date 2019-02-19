//JQuery animations


//TOGGLE
$('.dropButton').click(function (event) {
    var elem = $(event.target).closest('div').find('.dropContent');
    elem.fadeToggle('slow');
});

//SLIDE
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
   $("#navbar").slideDown(300);
  } else {
    $("#navbar").slideUp(300);
  }
  prevScrollpos = currentScrollPos;
}