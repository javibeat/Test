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
        // Actualiza el icono del interruptor de modo
        modeSwitch.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    // Establecer el modo y el icono inicial al cargar la página
    function setInitialMode() {
        let isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        modeSwitch.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    setInitialMode();
    modeSwitch.addEventListener('click', toggleDarkMode);

    menuHamburger.addEventListener('click', () => {
        sideBar.classList.toggle('expanded');
        menuContainer.style.display = sideBar.classList.contains('expanded') ? 'block' : 'none';
        // Aquí puedes ajustar cómo afecta la expansión del menú al resto del contenido
        // Por ejemplo, ajustar el padding o margen del contenido principal
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
