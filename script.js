// Función para cambiar entre modo claro y oscuro
function toggleMode() {
    var body = document.body;
    var modeIcon = document.getElementById('mode-icon'); // Añade el ID 'mode-icon' al ícono correspondiente en tu HTML

    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        modeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light-mode');
    }
}

function toggleMobileMenu() {
    var menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('active');
}

// Función para cargar el modo guardado
function loadPreferredMode() {
    var savedTheme = localStorage.getItem('theme');
    var modeIcon = document.getElementById('mode-icon');
    var body = document.body;

    if (savedTheme === 'dark-mode') {
        body.className = 'dark-mode';
        modeIcon.className = 'fas fa-moon';
    } else {
        body.className = 'light-mode';
        modeIcon.className = 'fas fa-sun';
    }
}

// Cargar el menú desde menu.html
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.menu-container').innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Evento para cargar el menú y el modo preferido al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    loadPreferredMode();
});
