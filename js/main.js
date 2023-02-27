"use strict"

document.addEventListener("DOMContentLoaded", ()=> {
    
    // rellax
    setTimeout(function () {
        if ( window.screen.width > 991) {
          let rellax = new Rellax('.rellax', {
          });
        }
    }, 0);

    if ( window.screen.width > 991) {    
        let banner = document.querySelector('.banner');
        let header = document.querySelector('.header');
        banner.style.paddingTop = header.offsetHeight + 25 + 'px';
    }

    // rattings
    let ratings = document.getElementsByClassName('rating');
    for (var i = 0; i < ratings.length; i++) {
      var r = new SimpleStarRating(ratings[i]);
      ratings[i].addEventListener('rate', function(e) {
          console.log('Rating: ' + e.detail);
      });
  }


  
  
  // animation

  let $body = document.querySelector('body');
  setTimeout(function () {
    $body.classList.add('loaded');
  }, 500);


  if ( window.screen.width > 991) { 
    setTimeout( function(){
      let bannerDesc = document.querySelector('.banner-align');
      bannerDesc.classList.add('open');
    },1000)
  }


  function scrollAnime() {
    if (document.querySelectorAll('.animate-item').length) {
      document.querySelectorAll('.animate-item').forEach(function(element){  
        if(window.pageYOffset >= element.offsetTop - (window.innerHeight)*0.9){
          element.classList.add('animated');
        }

      })

    }
  }
  scrollAnime();
  window.addEventListener('scroll', function () {
    scrollAnime();
  });
    
});