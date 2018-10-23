self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open('image-store').then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll([
                '/index.html',
                '/script.js',
                '/style.css',
                '/images/img_1.jpg',
                '/images/img_2.jpg',
                '/images/img_3.jpg',
                '/images/img_4.jpg'
        ]);
    })
);
});
/*
self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );

});
*/
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('image-store').then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });