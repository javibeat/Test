document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.sideBar');
    const modeSwitch = document.getElementById('modeSwitch'); // Asegúrate de que este es el ID correcto

    // Cargar el menú desde menu.html y añadir funcionalidades después de la carga
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            const menuContainer = document.getElementById('menuContainer');
            menuContainer.innerHTML = html;
            
            // Después de cargar el menú, añadir evento click al menú hamburguesa
            const menuHamburger = document.getElementById('menuHamburger');
            menuHamburger.addEventListener('click', () => {
                sideBar.classList.toggle('expanded');
                // Toggle del display del menú dependiendo de la clase 'expanded'
                const menu = document.querySelector('.menu');
                if (menu) {
                    menu.style.display = sideBar.classList.contains('expanded') ? 'flex' : 'none';
                }
            });
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // Funcionalidad para cambiar modos claro/oscuro
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});