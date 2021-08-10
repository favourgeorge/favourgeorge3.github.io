var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};

 function myFunction()
{
    alert("Your response has been recorded!");
      document.getElementById('name').value=''; 
      document.getElementById('name2').value='';
      document.getElementById('email').value=''; 
      document.getElementById('email2').value=''; 
      document.getElementById('message').value=''; 
}

/*
* Javascript to show and hide cookie banner using localstroage
*/

/**
 * Shows the Cookie banner 
 */
function showCookieBanner(){
    let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
    cookieBanner.style.display = "block";
}

/**
 * Hides the Cookie banner and saves the value to localstorage
 */
function hideCookieBanner(){
    localStorage.setItem("web_dev_isCookieAccepted", "yes");

    let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
    cookieBanner.style.display = "none";
}

/**
 * Checks the localstorage and shows Cookie banner based on it.
 */
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
window.onload = doStuff(); initializeCookieBanner();
window.nk_hideCookieBanner = hideCookieBanner;

var mybutton = document.getElementById("myBtn");



//back to top


// When the user scrolls down 20px from the top of the document, show the button
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

