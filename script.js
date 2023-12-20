// Función para cambiar entre modo claro y oscuro
function toggleMode() {
    var body = document.body;
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
}

// Cargar el menú desde menu.html
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Inicializar la carga del menú
loadMenu();