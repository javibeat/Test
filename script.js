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
      document.body.classList.toggle('dark-mode');
  });
});