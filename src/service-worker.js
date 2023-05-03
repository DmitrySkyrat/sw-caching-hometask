
// Here make implementation of service worker
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = ['./index.html', './bundle.js', './style.css'];

self.addEventListener('install', (event) => {
  console.log('Service worker was installed');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('my-cache-') && cacheName !== CACHE_NAME;
            })
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service worker fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('Cache hit:', event.request.url);
        return response;
      }
      console.log('Cache miss:', event.request.url);
      return fetch(event.request);
    })
  );
});