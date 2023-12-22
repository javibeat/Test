document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.sideBar');
    const menuHamburger = document.querySelector('.menu-hamburger');
    const modeSwitch = document.querySelector('.mode');
    const menuContainer = document.querySelector('.menu-container');

    // Función para cambiar el icono de modo y guardar preferencia
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        let isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        // Aquí se actualiza el icono según el estado del modo oscuro
        modeSwitch.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Establecer el modo y el icono inicial al cargar la página
    function setInitialMode() {
        let isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        modeSwitch.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }

    setInitialMode();
    modeSwitch.addEventListener('click', toggleDarkMode);

    menuHamburger.addEventListener('click', () => {
        sideBar.classList.toggle('expanded');
        // Esto es para alternar la visualización del menú y desplazar el contenido hacia abajo
        if (sideBar.classList.contains('expanded')) {
            menuContainer.style.display = 'block';
            document.querySelector('.mainContent').style.transform = 'translateY(' + menuContainer.offsetHeight + 'px)';
        } else {
            menuContainer.style.display = 'none';
            document.querySelector('.mainContent').style.transform = 'none';
        }
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
