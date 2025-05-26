const menuButton = document.getElementById('mobile-menu-button');
const closeButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-overlay');

function toggleMenu() {
  mobileMenu.classList.toggle('translate-x-full');
  overlay.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-link');
  const indicator = document.getElementById('tab-indicator');
  let activeTab = document.querySelector('.tab-link[data-tab="all"]');

  // Set initial active tab
  activeTab.classList.add('text-primary');

  // Calculate and set initial indicator position
  updateIndicator(activeTab);

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('text-primary'));

      // Add active class to clicked tab
      this.classList.add('text-primary');
      activeTab = this;

      // Update indicator position
      updateIndicator(this);
    });
  });

  function updateIndicator(tab) {
    const tabRect = tab.getBoundingClientRect();
    const containerRect = tab.parentElement.getBoundingClientRect();

    indicator.style.width = `${tabRect.width}px`;
    indicator.style.left = `${tabRect.left - containerRect.left}px`;
  }

  // Update indicator on window resize
  window.addEventListener('resize', () => updateIndicator(activeTab));
});


// card counter
document.addEventListener('DOMContentLoaded', function() {
  const statsSection = document.getElementById('stats-section');
  const counters = document.querySelectorAll('[data-target]');
  let animationStarted = false;
  
  // Animation function
  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 16ms is roughly one frame
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  }
  
  // Intersection Observer to trigger animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationStarted) {
        animationStarted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of section is visible
  
  observer.observe(statsSection);
});


const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: "3000",
  delay: 600,
})

sr.reveal(".text__left", {
  origin: "left",
  duration: "1000",
  distance: "100px",
  interval: 200
})
sr.reveal(".img__left", {
  origin: "right",
  duration: "1000",
  distance: "100px",
  interval: 200
})
sr.reveal(".ads__content", {
  duration: "1000",
  distance: "100px",
  interval: 200
})

sr.reveal(".bottom__content", {
  duration: "1000",
  distance: "100px",
  interval: 200
})

sr.reveal(".cards__card > div", {
  duration: "1500",
  distance: "100px",
  interval: 200
})