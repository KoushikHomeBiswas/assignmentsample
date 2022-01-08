
(function() {
  "use strict";

//Scroll to top
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// preloader
const preLoader = document.getElementById('preloader');
function loaderSite() {
  preLoader.classList.add('hidden');
}
window.addEventListener('load', () => {
  setTimeout(loaderSite, 2500);
}, false);



// navbar active
var header = document.getElementById("collapsibleNavbar");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// getFullYear
document.getElementById("year").innerHTML = new Date().getFullYear();


// Clients Slider
 new Swiper('.clients-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120
    }
  }
});


// Testimonials slider
 new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 3,
    }
  }
});

//Animation
function aos_init() {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    delay: 200,
    disable: 'mobile',
  });
  AOS.init({
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
}
window.addEventListener('load', () => {
  aos_init();
});
  
//Dynamic Width Elements
// document.querySelector( '.container' ).style.fontSize = yourDesiredHeight + 'px';


//Show Modal on Window Load
window.addEventListener('load', () => {
  const modal = document.querySelector('#myWelcomeModal');
  if (modal) {
    modal.classList.add('show');
    modal.style.display = 'block';
  }
});





})();
