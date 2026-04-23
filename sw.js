// PrepPulse V25 — Service Worker
// Caches app for offline use

const CACHE_NAME = 'preppulse-v25';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&family=Noto+Serif+Devanagari:wght@400;700;800&display=swap',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js'
];

// Install: cache core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // Cache what we can, ignore failures for CDN assets
      return cache.addAll(['./','./index.html']).catch(function(){});
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: network-first with cache fallback
self.addEventListener('fetch', function(e) {
  // Skip non-GET and Firebase requests
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('firebasedatabase') || 
      e.request.url.includes('firebaseio.com')) return;

  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        // Cache successful responses
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        // Offline: serve from cache
        return caches.match(e.request).then(function(cached) {
          return cached || caches.match('./');
        });
      })
  );
});
