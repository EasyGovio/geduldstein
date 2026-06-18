
const CACHE_NAME = 'geduldstein-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/blog/buyukannemin-tasi.html',
  '/blog/heybeden-tasanlar.html',
  '/blog/neden-olmasin.html'
  // Buraya uygulama gibi görünmesini istediğiniz diğer sayfaları ekleyin
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});