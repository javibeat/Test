document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('.dark-mode-toggle input[type="checkbox"]');
    
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  
    toggleSwitch.addEventListener('change', switchTheme, false);
  
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  });