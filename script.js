document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menuContainer');
    const menuHamburger = document.getElementById('menuHamburger');
    const sideBar = document.querySelector('.sideBar');
    const modeSwitch = document.querySelector('.mode');

    // Cargar el menú desde menu.html
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            menuContainer.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // Funcionalidad del menú hamburguesa
    menuHamburger.addEventListener('click', () => {
        sideBar.classList.toggle('expanded');
    });

    // Funcionalidad para cambiar modos claro/oscuro
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});