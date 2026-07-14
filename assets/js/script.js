// Abrir enlaces externos en nueva pestaña y añadir icono
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');
  const currentHost = window.location.hostname;

  links.forEach(function(link) {
    // Solo si el enlace apunta a un dominio diferente
    if (link.hostname !== currentHost) {
      // Abrir en nueva pestaña
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      // Añadir icono de enlace externo (opcional)
      const icon = document.createElement('span');
      icon.innerHTML = ' <i class="fas fa-external-link-alt fa-xs"></i> ';
      link.appendChild(icon);
    }
  });
});
