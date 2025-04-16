// Main JavaScript file for Chorbi template
console.log('Chorbi - Digital Marketing Agency Template loaded!');

// Initialize any JavaScript components here

// Add smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (const anchor of anchorLinks) {
  anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
    e.preventDefault();

    const hrefAttr = this.getAttribute('href');
    if (!hrefAttr) return;

    const target = document.querySelector(hrefAttr);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}

// Initialize mobile navigation
const initMobileNav = () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    });
  }
};

// Initialize the script when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
});
