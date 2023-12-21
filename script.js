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
  document.querySelector('.mode').addEventListener('click', function() {
      if (document.body.classList.contains('dark-mode')) {
          document.body.classList.remove('dark-mode');
          document.querySelector('.mode i').classList.remove('fas', 'fa-sun');
          document.querySelector('.mode i').classList.add('fas', 'fa-moon');
      } else {
          document.body.classList.add('dark-mode');
          document.querySelector('.mode i').classList.remove('fas', 'fa-moon');
          document.querySelector('.mode i').classList.add('fas', 'fa-sun');
      }
  });
});