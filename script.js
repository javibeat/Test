document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            // Asumiendo que los enlaces tienen una clase 'menu-link'
            const menuLinks = document.querySelectorAll('.menu-link');

            // Añadir evento click a cada enlace del menú
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    // Remover la clase 'active' de todos los enlaces
                    menuLinks.forEach(link => link.classList.remove('active'));
                    // Añadir la clase 'active' al enlace clickeado
                    this.classList.add('active');
                });
            });
        })
        .catch(error => console.error('Error al cargar el menú:', error));
});
