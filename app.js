document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    
    const ctaButtons = document.querySelectorAll('.btn-cta, .btn-showcase');
    ctaButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = button.getAttribute('href') ? button.getAttribute('href').substring(1) : null;
        if (targetId) {
          document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
   
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
  