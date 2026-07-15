// Abrir enlaces externos (intento segundo plano) + botón copiar con sticky inteligente
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ============ ENLACES EXTERNOS ============
  const host = window.location.hostname;
  document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach(link => {
    if (link.hostname === host || link.dataset.ext === 'true') return;
    link.dataset.ext = 'true';

    // Icono externo
    const icon = document.createElement('span');
    icon.innerHTML = ' <i class="fas fa-external-link-alt fa-xs"></i> ';
    icon.setAttribute('aria-hidden', 'true');
    link.appendChild(icon);

    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');

    link.addEventListener('click', function(e) {
      if (this.dataset.autoClick === 'true') {
        delete this.dataset.autoClick;
        return;
      }
      e.preventDefault();
      const newWindow = window.open(this.href, '_blank');
      if (newWindow) {
        try { newWindow.blur(); } catch(_) {}
        window.focus();
        setTimeout(() => window.focus(), 0);
        setTimeout(() => window.focus(), 50);
      } else {
        // Fallback: clic programático sin perder la app
        this.dataset.autoClick = 'true';
        this.click();
      }
    });
  });

  // ============ BOTÓN COPIAR EN BLOQUES DE CÓDIGO ============
  function wrapCodeBlocks() {
    const selectors = 'div.highlight pre, pre.highlight, pre:has(> code)';
    document.querySelectorAll(selectors).forEach(pre => {
      if (pre.parentNode?.classList.contains('code-block-wrapper')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      createCopyButton(wrapper);
    });
  }

  function createCopyButton(wrapper) {
    const btn = document.createElement('button');
    btn.className = 'copy-button';
    btn.innerHTML = '<i class="fas fa-copy"></i> <span>Copy</span>';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    wrapper.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = wrapper.querySelector('code');
      if (!code) return;
      const text = code.textContent || '';
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Fallback para HTTP o navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      // Feedback visual
      btn.classList.add('copied');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fas fa-check';
      const span = btn.querySelector('span');
      if (span) span.textContent = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        if (icon) icon.className = 'fas fa-copy';
        if (span) span.textContent = 'Copy';
      }, 2000);
    });
  }

  // ============ STICKY INTELIGENTE ============
  function setupSticky() {
    const wrappers = [...document.querySelectorAll('.code-block-wrapper')]
      .map(w => ({ wrapper: w, button: w.querySelector('.copy-button') }))
      .filter(x => x.button);

    const update = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;

      wrappers.forEach(({ wrapper, button }) => {
        const rect = wrapper.getBoundingClientRect();
        const topOff = rect.top;
        const bottomOff = rect.bottom;

        if (topOff <= 0 && bottomOff > 0) {
          // Sticky
          button.classList.add('copy-button--sticky');
          button.classList.remove('copy-button--hidden');
        } else if (bottomOff <= 0) {
          // Oculto
          button.classList.add('copy-button--hidden');
          button.classList.remove('copy-button--sticky');
        } else {
          // Normal
          button.classList.remove('copy-button--sticky', 'copy-button--hidden');
        }
      });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    });
    window.addEventListener('resize', update);
    update();
  }

  wrapCodeBlocks();
  setupSticky();
});
