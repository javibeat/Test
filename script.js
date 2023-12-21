document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.querySelector('.mode');
    const body = document.body;
  
    // Función para cambiar el ícono dependiendo del modo
    const toggleModeIcon = () => {
      const icon = modeSwitch.querySelector('i');
      if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
      }
    };
  
    // Evento para cambiar el modo y el ícono
    modeSwitch.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      toggleModeIcon();
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  
    // Cargar el tema guardado en el almacenamiento local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
      toggleModeIcon();
    }
  });