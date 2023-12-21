document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    
    function applyTheme() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
      updateModeIcon();
    }
  
    function updateModeIcon() {
      const modeSwitch = document.querySelector('.mode');
      const icon = modeSwitch.querySelector('i');
      if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
      }
    }
  
    const modeSwitch = document.querySelector('.mode');
    modeSwitch.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
      updateModeIcon();
    });
  
    // Aplica el tema al cargar la página
    applyTheme();
  });