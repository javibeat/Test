// Función para cambiar entre modo claro y oscuro
function toggleMode() {
    var body = document.body;
    // Alternar las clases para el modo
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Guardar la preferencia en localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.setItem("theme", "light-mode");
    }
}

// Función para cargar el modo guardado
function loadPreferredMode() {
    var savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.className = savedTheme;
    }
}

// Cargar el menú desde menu.html
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            var menuContainer = document.querySelector('.menu-container');
            if(menuContainer) {
                menuContainer.innerHTML = data;
            }
        })
        .catch(err => console.error(err));
}

// Inicializar la carga del menú y el modo preferido
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    loadPreferredMode();
});
