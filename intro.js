// NAVBAR SECTION

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});



// SERVICE SECTION

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.service');

  const checkVisibility = () => {
    elements.forEach(el => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom >= 0) {
        el.classList.add('visible');
      }
    });
  };

  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});


// STATS SECTION

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.stat-item');
  
    const checkVisibility = () => {
      elements.forEach(el => {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          el.classList.add('visible');
        }
      });
    };
  
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
  });


// Testimonial Slider 

var splide = new Splide( '#testimonial-slider', {
  type   : 'loop',
  drag   : 'free',
  perPage: 4,
  gap    : '20px',
  breakpoints: {
    768: {
      perPage: 1, // Adjust per page count for smaller screens
    },
    1024: {
      perPage: 2,
    },
  },
});

splide.mount();


