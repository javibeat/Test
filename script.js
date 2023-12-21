document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menuContainer');
    const menuHamburger = document.getElementById('menuHamburger');
    const sideBar = document.querySelector('.sideBar');
    const modeSwitch = document.getElementById('modeSwitch'); // Asegúrate de que el ID es correcto

    // Cargar el menú desde menu.html
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            menuContainer.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // Funcionalidad del menú hamburguesa para móviles
    menuHamburger.addEventListener('click', () => {
        // Toggle la clase 'expanded' para el sidebar
        sideBar.classList.toggle('expanded');
        // Comprobar si el menú está expandido para mostrar u ocultar el menú
        const menu = sideBar.querySelector('.menu'); // Selecciona el menú dentro del sidebar
        if (menu) {
            if (sideBar.classList.contains('expanded')) {
                menu.style.display = 'flex'; // o 'block', dependiendo de tus estilos
            } else {
                menu.style.display = 'none';
            }
        }
    });

    // Funcionalidad para cambiar modos claro/oscuro
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Aquí puedes cambiar las variables de CSS si es necesario
    });
});