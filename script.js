document.addEventListener('DOMContentLoaded', function () {
    // Función para cambiar la sección activa
    function changeActiveSection(targetId) {
        document.querySelectorAll('.page-section').forEach((section) => {
            section.classList.remove('active-section');
            section.style.display = 'none'; // Ocultar las secciones no activas
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            targetSection.style.display = 'block'; // Mostrar la sección activa
            // Inicia la transición de opacidad
            setTimeout(() => targetSection.style.opacity = 1, 0);
        }
    }

    // Evento de clic para los elementos del menú
    document.querySelectorAll('.nav-item').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-page');
            changeActiveSection(targetId);

            // Marcar el enlace correspondiente como activo
            const currentlyActiveItem = document.querySelector('.nav-item.active');
            if (currentlyActiveItem) {
                currentlyActiveItem.classList.remove('active');
            }
            this.classList.add('active');

            // Opcional: desplazar suavemente hasta la sección si está en el mismo documento
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Activar la sección de inicio por defecto
    changeActiveSection('home');
});
