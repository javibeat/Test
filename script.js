document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.sideBar');
    const menuHamburger = document.querySelector('.menu-hamburger'); // Asegúrate de que la clase es la correcta

    // Funcionalidad para cambiar modos claro/oscuro
    const modeSwitch = document.querySelector('.mode'); // Usa la clase o el ID que tengas
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Cargar el menú desde menu.html
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            const menuContainer = document.getElementById('menuContainer');
            menuContainer.innerHTML = html;
            // Asegurarse de que el menú es interactuable una vez cargado
            menuHamburger.addEventListener('click', () => {
                // Aquí debería ir la lógica para desplegar el menú como un acordeón
                sideBar.classList.toggle('expanded');
                const menu = menuContainer.querySelector('.menu'); // Asegúrate de que la clase es la correcta
                if (menu) {
                    if (sideBar.classList.contains('expanded')) {
                        menu.style.display = 'block'; // O el estilo que prefieras
                    } else {
                        menu.style.display = 'none';
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar el menú:', error);
        });
});