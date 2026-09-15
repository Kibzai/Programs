const CACHE_NAME = "mi-app-v4";
const urlsToCache = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/script.js'
];

// ---------- INSTALL (uno solo) ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // cache.add por recurso: si uno falla, los demás igual se guardan
      return Promise.all(
        urlsToCache.map((url) =>
          cache.add(url).catch((err) => console.warn('No se pudo cachear:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ---------- ACTIVATE ----------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())   // toma control de las pestañas abiertas
  );
});

// ---------- FETCH ----------
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo GET y solo mismo origen
  if (request.method !== 'GET') return;
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cachea solo respuestas válidas del mismo origen
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(async () => {
        // 1) match exacto (ignorando query string)
        const cached = await caches.match(request, { ignoreSearch: true });
        if (cached) return cached;

        // 2) si es navegación, devuelve el index cacheado
        if (request.mode === 'navigate') {
          const fallback = await caches.match('./index.html');
          if (fallback) return fallback;
        }

        // 3) último recurso
        return new Response('Sin conexión', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })
  );
});
