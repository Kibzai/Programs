// Abrir enlaces externos en nueva pestaña (en segundo plano) y añadir icono
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');
  const currentHost = window.location.hostname;

  links.forEach(function(link) {
    // Solo si el enlace apunta a un dominio diferente
    if (link.hostname !== currentHost) {
      // Añadir icono de enlace externo
      const icon = document.createElement('span');
      icon.innerHTML = ' <i class="fas fa-external-link-alt fa-xs"></i> ';
      link.appendChild(icon);

      // Interceptar el clic
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita la navegación normal
        const url = this.href;
        // Abrir nueva pestaña
        const newWindow = window.open(url, '_blank');
        // Si la apertura fue exitosa, devolver el foco a la ventana actual
        if (newWindow) {
          window.focus();
        } else {
          // Si el navegador bloqueó la ventana emergente, usar fallback
          window.location.href = url;
        }
      });
    }
  });
});
