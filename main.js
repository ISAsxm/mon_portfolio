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

});

// /////////////////////////////////////////////
      // pour le menusticky mediaquery >1050px//
// /////////////////////////////////////////////
window.onscroll = function(){
   stickyMenu();
   
};

// je recupere mon menu et mon header
var menu = document.getElementById('menu');

// je recupere la distance de mon header
var startSticky = window.innerHeight;

// j'ajoute mon menu a mes autres sections
// des qu'il depasse la taille de mon header
function stickyMenu(){

      if(window.scrollY >= startSticky){
            menu.classList.add('sticky');
      }else {
            menu.classList.remove('sticky');
}

}