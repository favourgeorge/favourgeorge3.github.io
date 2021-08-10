$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});





//footer

 function myFunction()
{
    alert("Your response has been recorded!");
      document.getElementById('email2').value='';  
}


function showCookieBanner(){
    let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
    cookieBanner.style.display = "block";
}

function hideCookieBanner(){
    localStorage.setItem("web_dev_isCookieAccepted", "yes");

    let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
    cookieBanner.style.display = "none";
}

function initializeCookieBanner(){
    let isCookieAccepted = localStorage.getItem("web_dev_isCookieAccepted");
    if(isCookieAccepted === null)
    {
        localStorage.clear();
        localStorage.setItem("web_dev_isCookieAccepted", "no");
        showCookieBanner();
    }
    if(isCookieAccepted === "no"){
        showCookieBanner();
    }
}

// Assigning values to window object
window.onload = function(){initializeCookieBanner();}
window.nk_hideCookieBanner = hideCookieBanner;

var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


