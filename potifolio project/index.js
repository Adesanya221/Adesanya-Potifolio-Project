// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

// Add smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation for info items
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, 200 * index);
});

// Add hover effect for profile image
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = profileImage.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    profileImage.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
});

profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
});

// Add animation for contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
    setTimeout(() => {
        card.classList.add('aos-animate');
    }, 100 * (index + 1));
});

// Add hover effect for contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Add animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 200}ms`;
    item.classList.add('fade-up');
});

// Add hover effect for timeline items
timelineItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 30;
        const angleY = (centerX - x) / 30;
        
        item.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});

// Enhanced mobile animations and interactions
document.addEventListener('DOMContentLoaded', () => {
  // Add touch support for profile image tilt effect
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const { left, top, width, height } = profileImage.getBoundingClientRect();
      const x = (touch.clientX - left) / width;
      const y = (touch.clientY - top) / height;
      
      profileImage.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    });

    profileImage.addEventListener('touchend', () => {
      profileImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    });
  }

  // Optimize animations for mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    // Reduce animation intensity for mobile
    document.querySelectorAll('.contact-card').forEach(card => {
      card.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 40; // Reduced tilt
        const angleY = (centerX - x) / 40;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(5px)`;
      });
    });

    // Optimize timeline animations
    document.querySelectorAll('.timeline-item').forEach(item => {
      item.style.transform = 'none';
      item.style.transition = 'opacity 0.3s ease';
    });
  }

  // Add smooth scroll behavior with offset for mobile header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = isMobile ? 60 : 80; // Adjust offset based on device
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Optimize gallery loading for mobile
  const galleryItems = document.querySelectorAll('.gallery-item img');
  if (isMobile) {
    galleryItems.forEach(img => {
      img.loading = 'lazy';
      img.setAttribute('decoding', 'async');
    });
  }
});

// Add resize handler for responsive adjustments
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const isMobile = window.innerWidth <= 768;
    document.querySelectorAll('.contact-card, .timeline-item').forEach(element => {
      element.style.transform = 'none';
    });
  }, 250);
});
