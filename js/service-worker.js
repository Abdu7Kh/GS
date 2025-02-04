const CACHE_NAME = 'great-smile-lab-cache-v1';
const urlsToCache = [
  'index.html',
  'about.html',
  'services.html',
  'contact.html',
  'blog.html',
  'css/styles.css',
  'js/script.js',
  'images/logo.png'
  // أضف باقي الملفات والصور حسب الحاجة
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }
      }))
    )
  );
});
