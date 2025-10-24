// JavaScript muy básico para el portafolio
// Solo funciones simples que puedes entender fácilmente

// Esta línea hace que la página espere a cargar antes de EJECUTAR el código
window.onload = function() {
    
    // Mensaje de bienvenida en la consola (puedes verlo en F12)
    console.log("¡Portafolio de Juan Francisco cargado correctamente!");
    
    // Funcionalidad básica para el logo
    const logo = document.querySelector('.logo-imagen');
    if (logo) {
        logo.addEventListener('click', function() {
            // Al hacer clic en el logo, va al inicio
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Año automático en el footer
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Juan Francisco - Estudiante DAW. Todos los derechos reservados.`;
    }
};