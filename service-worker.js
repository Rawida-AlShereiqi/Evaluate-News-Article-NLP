// service-worker.js

self.addEventListener('install', event => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        'bundle.js',
        'bundle.js.LICENSE.txt',
        'bundle.js.map',
        'index.html',
        'service-worker.js',
        'service-worker.js.map',
        'style.d736c8306c28e8963ae6.css',
        'style.d736c8306c28e8963ae6.css.map',
        'workbox-74854057.js',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
