$(document).ready(function()
{

// ////////////////////////////////////////////////////////////////// //
            // pour  le menu en versions mobile //
// ////////////////////////////////////////////////////////////////// //

var content = document.getElementById('burger-content');
var sideBar = document.getElementById('burger-sidebar');

sideBar.innerHTML = content.innerHTML;

var button = document.getElementById('burger-button');

button.addEventListener('click',function(e)
{
      this.parentNode.classList.toggle('burger-activated');
});

// ///////////////////////////////////////////// //
      // pour appeler les animations au scroll //
// ///////////////////////////////////////////// //
window.onscroll = function()
{
   stickyMenu();
   underlineMenu();
   scrollFunction();
};

// ///////////////////////////////////////////// //
      // pour le menusticky mediaquery >1050px//
// ///////////////////////////////////////////// //

var menu = document.getElementById('menu');
var startSticky = document.getElementById('home').offsetTop;

function stickyMenu()
{
      if(window.scrollY >= startSticky){
            menu.classList.add('sticky');
      }else {
            menu.classList.remove('sticky');
      }
}

// ///////////////////////////////////////////////////////// //
      // pour le menu souligne mediaquery >1050px//
// ///////////////////////////////////////////////////////// //
function underlineMenu()
{
      var menuNav = document.querySelectorAll('#menu-nav a');
      var home = document.querySelector('header').offsetTop;
      var about = document.getElementById('about').offsetTop-10;
      var skills = document.getElementById('skills').offsetTop-10;
      var projects = document.getElementById('projects').offsetTop-10;
      var contact = document.getElementById('contact').offsetTop-10;

      if((window.scrollY == home) && (window.scrollY < about)) {
            menuNav[0].classList.add('underline');
      }else {
            menuNav[0].classList.remove('underline');
            } 
      if((window.scrollY >= about) && (window.scrollY < skills)) {
            menuNav[1].classList.add('underline');
      }else {
            menuNav[1].classList.remove('underline');
      }
      if((window.scrollY >= skills) && (window.scrollY < projects)) {
            menuNav[2].classList.add('underline');
      }else {
            menuNav[2].classList.remove('underline');
      }
      if((window.scrollY >= projects) && (window.scrollY < contact)) {
            menuNav[3].classList.add('underline');
      }else {
            menuNav[3].classList.remove('underline');
      }
      if(window.scrollY >= contact) {      
            menuNav[4].classList.add('underline');
      }else {
            menuNav[4].classList.remove('underline');
      }
}

// ////////////////////////////////////////////////////////////////// //
      // pour l'effet smooth lors du scroll du menu vers les ancres //
// ////////////////////////////////////////////////////////////////// //

$('.js-scrollTo').on('click', function()
{
      $('#container-burger').removeClass('burger-activated');
      var section = $(this).attr('href');
      var speed = 750;
      $('html, body').animate({ scrollTop: $(section).offset().top}, speed);
      return false;
});

// ////////////////////////////////////////////////////////////////// //
            // pour l'effet des flip card version mobile //
// ////////////////////////////////////////////////////////////////// //

$('.flip-card').on('click', function()
{
      $(this).children(':first').toggleClass('flippy');
});

// ////////////////////////////////////////////////////////////////// //
                  // pour le button sroll to top //
// ////////////////////////////////////////////////////////////////// //

function scrollFunction()
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopBtn").style.display = "block";
  } else {
    document.getElementById("toTopBtn").style.display = "none";
  }
}

$('#toTopBtn').on('click', function()
{
      $('html, body').animate({scrollTop:0}, 'slow');
      return false;
});

// ////////////////////////////////////////////////////////////////// //
                  // pour les slides section projects //
// ////////////////////////////////////////////////////////////////// //

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no)
{
  showSlides(slideIndex[no] += n, no);
}

$('.prev').on('click', function()
{
      plusSlides(-1, 0);
});
$('.next').on('click', function()
{
      plusSlides(1, 0);
});
$('.prev2').on('click', function()
{
      plusSlides(-1, 1);
});
$('.next2').on('click', function()
{
      plusSlides(1, 1);
});

function showSlides(n, no)
{
      var i;
      var x = document.getElementsByClassName(slideId[no]);
      if (n > x.length) {slideIndex[no] = 1}    
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
      }
      x[slideIndex[no]-1].style.display = "block";  
}

// fin du document ready function
});