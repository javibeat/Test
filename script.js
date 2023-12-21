document.addEventListener("DOMContentLoaded", function() {
    // Cargar el menú de menu.html
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('.menu-container').innerHTML = data;
      });
  
    // Alternar el menú de hamburguesa
    document.querySelector('.menu-hamburger').addEventListener('click', function() {
      document.querySelector('.sideBar').classList.toggle('expanded');
    });
  
    // Cambiar entre modos claro y oscuro
    document.querySelector('.mode').addEventListener('click', function(event) {
      const modeIcon = document.querySelector('.mode i');
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
      } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
      }
      event.stopPropagation(); // Prevenir que otros manejadores sean llamados
    });
  
    // Prevenir que el cambio de modo se dispare al hacer clic en enlaces
    document.querySelectorAll('.menu-container a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevenir que el clic suba al .mode
      });
    });
  });