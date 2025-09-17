// Service Worker para PWA en GitHub Pages
const CACHE_NAME = 'lista110-v1';
const urlsToCache = [
  '/padron/',
  '/padron/index.html',
  '/padron/styles.css',
  '/padron/script.js',
  '/padron/logo.svg',
  '/padron/icon.svg',
  '/padron/manifest.json',
  '/padron/padron_estudiantes_final.json'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Si está en caché, devolverlo
        if (response) {
          return response;
        }
        
        // Si no está en caché, hacer fetch
        return fetch(event.request).then(function(response) {
          // Si es una respuesta válida, guardarla en caché
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          var responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(function() {
          // Si falla el fetch, devolver la página principal
          if (event.request.destination === 'document') {
            return caches.match('/padron/index.html');
          }
        });
      })
  );
});
