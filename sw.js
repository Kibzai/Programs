const CACHE_NAME = "mi-app-v2";
const urlsToCache = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/script.js'
];

self.addEventListener('install', event => {
  console.log('Intentando cachear:', urlsToCache); // <-- Mira esto en la consola
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // <-- Activa el SW al instante
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      );
    }),
  );
});

// Instalación: precachea recursos críticos si quieres (opcional)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/assets/css/style.css',
        // otros recursos que quieras tener seguros offline
      ]);
    })
  );
});

// Estrategia: Network-First con fallback a caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Si la petición es GET y exitosa, guarda en caché para la próxima vez offline
        if (event.request.method === 'GET' && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Si falla la red (offline), busca en caché
        return caches.match(event.request);
      })
  );
});
