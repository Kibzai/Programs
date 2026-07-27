const CACHE_NAME = "mi-app-v1";
const urlsToCache = [
  "/Programs/",
  "/Programs/README.html",
  "/Programs/assets/css/home.css",
  "/Programs/assets/css/rouge.css",
  "/Programs/assets/css/style.css",
  "/Programs/assets/js/script.js",
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

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si está en caché, lo devuelve; si no, va a la red y guarda
      return (
        response ||
        fetch(event.request).then((fetchResponse) => {
          if (event.request.method === "GET" && fetchResponse.status === 200) {
            const clone = fetchResponse.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, clone));
          }
          return fetchResponse;
        })
      );
    }),
  );
});
