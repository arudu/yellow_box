const sections = document.querySelectorAll('.top-header, .title, .middle-section, .bottom-section, .footer');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < window.innerHeight) {
      section.classList.add('show');
    }
  });
});
