// Abrir enlaces externos en nueva pestaña (intento de segundo plano) y añadir botón de copiar en bloques de código
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ========================
  // 1. Enlaces externos
  // ========================
  const links = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');
  const currentHost = window.location.hostname;

  links.forEach(function(link) {
    if (link.hostname === currentHost) return;
    if (link.dataset.externoProcesado === 'true') return;
    link.dataset.externoProcesado = 'true';

    // Icono externo (usa Font Awesome, que ya cargas en el head)
    const icon = document.createElement('span');
    icon.innerHTML = ' <i class="fas fa-external-link-alt fa-xs"></i> ';
    icon.setAttribute('aria-hidden', 'true');
    link.appendChild(icon);

    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');

    link.addEventListener('click', function(e) {
      if (link.dataset.clickProgramado === 'true') {
        delete link.dataset.clickProgramado;
        return;
      }

      e.preventDefault();
      const url = this.href;

      const newWindow = window.open(url, '_blank');
      if (newWindow) {
        try { newWindow.blur(); } catch(e) {}
        window.focus();
        // Insistir un par de veces en recuperar el foco
        setTimeout(() => window.focus(), 0);
        setTimeout(() => window.focus(), 50);
      } else {
        // Fallback si el popup es bloqueado: clic programático sobre el enlace
        link.dataset.clickProgramado = 'true';
        link.click();
      }
    });
  });

  // ========================
  // 2. Botón de copiar en bloques de código
  // ========================
  function injectStyles() {
    if (document.getElementById('copy-button-styles')) return;
    const style = document.createElement('style');
    style.className = 'copy-button-styles';
    document.head.appendChild(style);
  }

  function createCopyButton(blockWrapper) {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = '<i class="fas fa-copy"></i> <span>Copy</span>';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    blockWrapper.appendChild(button);

    button.addEventListener('click', function() {
      const codeElement = blockWrapper.querySelector('code');
      if (!codeElement) return;

      const textToCopy = codeElement.textContent || '';

      navigator.clipboard.writeText(textToCopy).then(() => {
        // Feedback visual
        button.classList.add('copied');
        const icon = button.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-check';
        }
        const span = button.querySelector('span');
        if (span) span.textContent = 'Copied!';

        setTimeout(() => {
          button.classList.remove('copied');
          if (icon) {
            icon.className = 'fas fa-copy';
          }
          if (span) span.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        // Fallback para navegadores antiguos o contextos no seguros
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          button.classList.add('copied');
          const icon = button.querySelector('i');
          if (icon) icon.className = 'fas fa-check';
          const span = button.querySelector('span');
          if (span) span.textContent = 'Copied!';
          setTimeout(() => {
            button.classList.remove('copied');
            if (icon) icon.className = 'fas fa-copy';
            if (span) span.textContent = 'Copy';
          }, 2000);
        } catch (err) {
          alert('Failed to copy code');
        }
        document.body.removeChild(textarea);
      });
    });
  }

  function wrapCodeBlocks() {
    // Selector para bloques de código generados por Rouge (Jekyll)
    const codeBlocks = document.querySelectorAll('div.highlight pre, pre.highlight, pre:has(> code)');
    codeBlocks.forEach(function(pre) {
      // Evitar procesar dos veces
      if (pre.parentNode && pre.parentNode.classList.contains('code-block-wrapper')) return;

      // Crear wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';

      // Insertar wrapper antes del pre y mover pre dentro
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Crear botón de copiar
      createCopyButton(wrapper);
    });
  }

  // Inicializar todo
  injectStyles();
  wrapCodeBlocks();
});
