document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.sideBar');
    const menuHamburger = document.querySelector('.menu-hamburger');
    const modeSwitch = document.querySelector('.mode');
    const menuContainer = document.querySelector('.menu-container');

    // Función para cambiar el icono de modo y guardar preferencia
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        modeSwitch.className = isDarkMode ? 'mode fas fa-sun' : 'mode fas fa-moon';
    }

    // Establecer el modo y el icono inicial al cargar la página
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
    modeSwitch.className = isDarkMode ? 'mode fas fa-sun' : 'mode fas fa-moon';

    modeSwitch.addEventListener('click', toggleDarkMode);

    menuHamburger.addEventListener('click', () => {
        sideBar.classList.toggle('expanded');
        menuContainer.style.display = sideBar.classList.contains('expanded') ? 'block' : 'none';
    });

    // Cargar el menú desde menu.html
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            menuContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el menú:', error);
        });
});
