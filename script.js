document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.sideBar');
    const menuHamburger = document.querySelector('.menu-hamburger');
    const modeSwitch = document.querySelector('.mode');

    // Verificar si el usuario tiene una preferencia de modo claro/oscuro guardada
    if(localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        modeSwitch.innerHTML = '<i class="fas fa-sun"></i>'; // Cambiar a ícono de sol si está en modo oscuro
    } else {
        modeSwitch.innerHTML = '<i class="fas fa-moon"></i>'; // Ícono de luna para modo claro
    }

    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Guardar la preferencia de modo del usuario
        let isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        modeSwitch.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            const menuContainer = document.querySelector('.menu-container');
            menuContainer.innerHTML = html;
            // Resto del código...
        })
        .catch(error => {
            console.error('Error al cargar el menú:', error);
        });

    // Resto del código...
});
