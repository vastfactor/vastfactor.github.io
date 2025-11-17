(function() {
  "use strict";

  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.transition = 'opacity 0.5s ease';
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
  }

  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    }
    window.addEventListener('load', toggleBackToTop);
    document.addEventListener('scroll', toggleBackToTop);
    
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // NEW: Navbar Scroll Behavior
  const navbar = document.getElementById('navbar');
  if (navbar) {
      const heroAreaHeight = document.getElementById('hero-area').offsetHeight;
      const toggleNavbarBg = () => {
          if (window.scrollY > (heroAreaHeight - 100)) { // Add class after scrolling past hero
              navbar.classList.add('navbar-scrolled');
          } else {
              navbar.classList.remove('navbar-scrolled');
          }
      }
      window.addEventListener('load', toggleNavbarBg);
      document.addEventListener('scroll', toggleNavbarBg);
  }

  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
  });

  // Initialize Testimonials Swiper
  new Swiper('.testimonial-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-slider .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 30
      }
    }
  });

  // Initialize Team Swiper
  new Swiper('.team-slider', {
    speed: 800,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.team-slider .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      }
    }
  });

  // --- Animated Counter REMOVED ---

})();