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


  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const indicator = document.getElementById('tab-indicator');
    let activeTab = document.querySelector('.tab-link[data-tab="all"]');
    
    // Set initial active tab
    activeTab.classList.add('text-primary');
    
    // Calculate and set initial indicator position
    updateIndicator(activeTab);
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
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