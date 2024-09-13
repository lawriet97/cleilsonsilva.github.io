const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  window.addEventListener('scroll', function() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        const rect = content.getBoundingClientRect();
        const isInViewport = rect.top >= window.innerHeight / 4 && rect.bottom <= window.innerHeight * 1;

        if (isInViewport) {
            content.classList.add('zoomed');
        } else {
            content.classList.remove('zoomed');
        }
    });
});

document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    document.querySelectorAll('.icon').forEach(otherIcon => {
      if (otherIcon !== icon) {
        otherIcon.style.filter = 'blur(2px)'; // Aplica desfoque aos outros ícones
      }
    });
    icon.classList.add('zoomed'); // Aplica zoom ao ícone em foco
  });

  icon.addEventListener('mouseout', () => {
    document.querySelectorAll('.icon').forEach(otherIcon => {
      otherIcon.style.filter = 'blur(0)'; // Remove desfoque de todos os ícones
    });
    icon.classList.remove('zoomed'); // Remove zoom do ícone em foco
  });
});



document.querySelectorAll('.contact-icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    document.querySelectorAll('.contact-icon').forEach(otherIcon => {
      if (otherIcon !== icon) {
        otherIcon.style.filter = 'blur(1px)'; // Aplica desfoque aos outros ícones
      }
    });
    icon.classList.add('zoomed'); // Aplica zoom ao ícone em foco
  });

  icon.addEventListener('mouseout', () => {
    document.querySelectorAll('.contact-icon').forEach(otherIcon => {
      otherIcon.style.filter = 'blur(0)'; // Remove desfoque de todos os ícones
    });
    icon.classList.remove('zoomed'); // Remove zoom do ícone em foco
  });
});



