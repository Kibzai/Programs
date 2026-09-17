const CACHE_NAME = "mi-app-v6";
const PRECACHE = [
  "./",
  "./index.html",
  "./README.html",
  "./KIBZA.html",
  "./KIBSAIM.html",
  "./PHONE.html",
  "./MAFIA.html",
  "./HELP.html",
  "./assets/css/style.css",
  "./assets/css/default.css",
  "./assets/css/rouge.css",
  "./assets/css/home.css",
  "./assets/js/script.js",
  "./assets/favicon/favicon.ico",
  "./assets/favicon/favicon.svg",
  "./assets/favicon/apple-touch-icon.png",
  "./assets/favicon/favicon-96x96.png",
  "./assets/favicon/web-app-manifest-192x192.png",
  "./assets/favicon/web-app-manifest-512x512.png"
];

// ---------- INSTALL: precache completo. Si algo crítico falla, se aborta la
// instalación (el navegador la reintentará), garantizando offline-first. ----------
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// ---------- ACTIVATE: limpia cachés viejas y toma control de la página ----------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_NAME)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ---------- FETCH: CACHE-FIRST (offline-first) + revalidación en segundo plano ----------
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Solo GET del mismo origen
  if (request.method !== "GET") return;
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      // 1) hay caché: sirve al instante (offline) y actualiza en segundo plano
      if (cached) {
        event.waitUntil(
          fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
              }
            })
            .catch(() => {})
        );
        return cached;
      }

      // 2) no hay caché: trae de red, guarda y devuelve
      return fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // 3) offline sin caché: navegación -> index cacheado; si no, aviso
          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return new Response("Sin conexión", {
            status: 503,
            statusText: "Offline"
          });
        });
    })
  );
});