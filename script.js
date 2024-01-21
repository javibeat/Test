// Función para cambiar la sección activa
function changeActiveSection(targetId) {
    document.querySelectorAll('.page-section').forEach((section) => {
        section.style.display = 'none'; // Ocultar las secciones no activas
        section.style.opacity = 0; // Restablecer la opacidad
        section.classList.remove('active-section');
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active-section');
        // Inicia la transición de opacidad
        setTimeout(() => {
            targetSection.style.display = 'block'; // Mostrar la sección activa
            targetSection.style.opacity = 1;
        }, 0);
    }
}

// Función para marcar el elemento del menú como activo
function setActiveMenuItem() {
    const currentPage = window.location.hash.replace('#', '') || 'home';
    // Marcar el enlace correspondiente como activo
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active'); // Elimina la clase active de todos los elementos
        if (item.getAttribute('data-page') === currentPage) {
            item.classList.add('active'); // Añade la clase active al elemento actual
        }
    });
}

// Evento de clic para los elementos del menú
function setupMenuClicks() {
    document.querySelectorAll('.nav-item').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Actualiza la URL con el hash correcto
            const targetId = this.getAttribute('data-page');
            window.location.hash = targetId;

            changeActiveSection(targetId);
            setActiveMenuItem();
        });
    });
}

// Espera a que el contenido del menú se cargue
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            setupMenuClicks(); // Configura los eventos de clic después de cargar el menú
            setActiveMenuItem(); // Establece el elemento de menú activo inicial
        });
}

// Listener para cambios en la URL (hash change)
window.addEventListener('hashchange', function () {
    const pageId = window.location.hash.replace('#', '');
    changeActiveSection(pageId);
    setActiveMenuItem();
});

document.addEventListener('DOMContentLoaded', function () {
    loadMenu();
    changeActiveSection('home'); // Activar la sección de inicio por defecto
});
