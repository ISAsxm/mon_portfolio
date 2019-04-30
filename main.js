$(document).ready(function(){

// ////////////////////////////////////////////////////////////////// //
      // pour  le menu en versions natel //
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
   
   if($('#container-burger').hasClass('burger-activated')){
      
      $('#burger-button').html('&#10006;');
   }else{
      $('#burger-button').html('&#9776;');
    }
});


// /////////////////////////////////////////////
      // pour le menusticky mediaquery >1050px//
// /////////////////////////////////////////////
window.onscroll = function(){
   stickyMenu();
   underlineMenu();
};

// je recupere mon menu et mon header
var menu = document.getElementById('menu');

// je recupere la distance de mon header
// var startSticky = window.innerHeight;
var startSticky = document.getElementById('home').offsetTop;
// j'ajoute mon menu a mes autres sections
// des qu'il depasse la taille de mon header
function stickyMenu(){

      if(window.scrollY >= startSticky){
            menu.classList.add('sticky');
      }else {
            menu.classList.remove('sticky');
}

}

// ////////////////////////////////////////////////////
      // pour le menu general souligne mediaquery >1050px//
// ////////////////////////////////////////////////////
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
      


      $('.js-scrollTo').on('click', function(){

            var section = $(this).attr('href');
            var speed = 750;
            $('html, body').animate({ scrollTop: $(section).offset().top}, speed);
            return false;
      });

      
// fin du document ready function
});