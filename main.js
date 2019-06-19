$(document).ready(function(){

// ////////////////////////////////////////////////////////////////// //
            // pour  le menu en versions mobile //
// ////////////////////////////////////////////////////////////////// //

// je recupere le contenu du menu et ma sidebar

var content = document.getElementById('burger-content');
var sideBar = document.getElementById('burger-sidebar');

// et lintegre dans ma side-bar
sideBar.innerHTML = content.innerHTML;

// je recupere le bouton et mon overlayout
var button = document.getElementById('burger-button');

// je declenche lajout/le retrait de ma classe
//  a lobjet parent lors de levenement onclick
button.addEventListener('click',function(e){
    
   this.parentNode.classList.toggle('burger-activated');
   
//    if($('#container-burger').hasClass('burger-activated')){
      
//        $('#burger-button').html('&#10006;');
//     }else{
//        $('#burger-button').html('&#9776;');
//     }
});

// ///////////////////////////////////////////// //
      // pour appeler les animations au scroll //
// ///////////////////////////////////////////// //
window.onscroll = function(){
   stickyMenu();
   underlineMenu();
   scrollFunction();
};

// ///////////////////////////////////////////// //
      // pour le menusticky mediaquery >1050px//
// ///////////////////////////////////////////// //
// je recupere mon menu et mon header
var menu = document.getElementById('menu');

// je recupere la taille de mon header
// var startSticky = window.innerHeight;
var startSticky = document.getElementById('home').offsetTop;
// j'ajoute mon menu a mes autres sections
// des qu'il depasse la taille de mon header/home
function stickyMenu(){

      if(window.scrollY >= startSticky){
            menu.classList.add('sticky');
      }else {
            menu.classList.remove('sticky');
      }

}

// ///////////////////////////////////////////////////////// //
      // pour le menu souligne mediaquery >1050px//
// ///////////////////////////////////////////////////////// //
function underlineMenu(){
      // je recupere le contenu de mon menu
      var menuNav = document.querySelectorAll('#menu-nav a');
      
      // je recupere mes sections et leur hauteur
      var home = document.querySelector('header').offsetTop;
      var about = document.getElementById('about').offsetTop-10;
      var skills = document.getElementById('skills').offsetTop-10;
      var projects = document.getElementById('projects').offsetTop-10;
      var contact = document.getElementById('contact').offsetTop-10;

      // je definit dans quelle condition ajouter la classe underline
            if((window.scrollY == home) && (window.scrollY < about)){
                  menuNav[0].classList.add('underline');
            }else{
                  menuNav[0].classList.remove('underline');
            } 
       
            if((window.scrollY >= about) && (window.scrollY < skills)){
                  menuNav[1].classList.add('underline');
            }else{
                  menuNav[1].classList.remove('underline');
            }
      
            if((window.scrollY >= skills) && (window.scrollY < projects)){
                  menuNav[2].classList.add('underline');
            }else{
                  menuNav[2].classList.remove('underline');
            }
      
            if((window.scrollY >= projects) && (window.scrollY < contact)){
                  menuNav[3].classList.add('underline');
            }else{
                  menuNav[3].classList.remove('underline');
            }

            if(window.scrollY >= contact){      
                  menuNav[4].classList.add('underline');
            }else{
                  menuNav[4].classList.remove('underline');
            }
}

// ////////////////////////////////////////////////////////////////// //
      // pour l'effet smooth lors du scroll du menu vers les ancres //
// ////////////////////////////////////////////////////////////////// //
// je selectionne la classe js qui va me servir à déclencher l'accélération
// du scroll et assigne une vitesse lors du scroll à mon document html

      $('.js-scrollTo').on('click', function(){

            $('#container-burger').removeClass('burger-activated');
            var section = $(this).attr('href');
            var speed = 750;
            $('html, body').animate({ scrollTop: $(section).offset().top}, speed);
            return false;
      });

// ////////////////////////////////////////////////////////////////// //
            // pour l'effet des flip card version mobile //
// ////////////////////////////////////////////////////////////////// //
// j'ajoute/enlève la rotation au click des cartes

      $('.flip-card').on('click', function(){

            $(this).children(':first').toggleClass('flippy');
            
     });

// ////////////////////////////////////////////////////////////////// //
                  // pour le button sroll to top //
// ////////////////////////////////////////////////////////////////// //

//pour faire apparaître le button retour au top lors du scroll down

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopBtn").style.display = "block";
  } else {
    document.getElementById("toTopBtn").style.display = "none";
  }
}

// au click du button, retour au début du document
$('#toTopBtn').on('click', function(){
      
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
});

// ////////////////////////////////////////////////////////////////// //
                  // pour les slides section projects //
// ////////////////////////////////////////////////////////////////// //
// je défini 2 slideshow pour mes 2 catégories de projets

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
// au click des fleches je montre le projet suivant ou le precedant
$('.prev').on('click', function(){
      plusSlides(-1, 0);
});
$('.next').on('click', function(){
      plusSlides(1, 0);
});
$('.prev2').on('click', function(){
      plusSlides(-1, 1);
});
$('.next2').on('click', function(){
      plusSlides(1, 1);
});

function showSlides(n, no) {
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