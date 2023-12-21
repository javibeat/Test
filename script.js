document.addEventListener("DOMContentLoaded", function() {
    // Carga el menú desde menu.html
    const menuContainer = document.getElementById('sidebar');
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        menuContainer.innerHTML = data;
        // Aquí también se podría inicializar el estado del modo oscuro/claro
      });
  
    // Función para alternar entre modos claro y oscuro
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode"); // Asumimos que existe una clase .dark-mode en el CSS
    // Guardar la preferencia en localStorage
    localStorage.setItem('mode', body.classList.contains("dark-mode") ? "dark" : "light");
  }
  
  // Aplicar la preferencia guardada al cargar la página
  window.onload = () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
  
  // Añadir el evento para cambiar el modo al botón correspondiente
  document.querySelector(".mode-button").addEventListener("click", toggleMode);
  
  });
  