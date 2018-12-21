window.onscroll = function() {myFunction()};

var headnav = document.getElementById("headnav");
var sticky = headnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    headnav.classList.add("sticky")
  } else {
    headnav.classList.remove("sticky");
  }
}