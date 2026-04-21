const CACHE_NAME = 'preppulse-v8';
const CORE_FILES = [
  './',
  './index.html',
  './manifest.json'
];

// Optional files - cached if available, won't fail if missing
const OPTIONAL_FILES = [
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // Cache core files (required)
      return cache.addAll(CORE_FILES).then(function() {
        // Cache optional files individually - ignore failures
        return Promise.all(
          OPTIONAL_FILES.map(function(url) {
            return cache.add(url).catch(function() {});
          })
        );
      }).catch(function(err) {
        console.warn('[SW] Core cache partial fail:', err);
        // Try one by one as fallback
        return Promise.all(
          CORE_FILES.map(function(url) {
            return cache.add(url).catch(function() {});
          })
        );
      });
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })
      );
    }).then(function() { return clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(e.request).then(function(cached) {
        var network = fetch(e.request).then(function(resp) {
          if (resp && resp.status === 200) {
            cache.put(e.request, resp.clone());
          }
          return resp;
        }).catch(function() { return cached; });
        return cached || network;
      });
    })
  );
});

self.addEventListener('push', function(e) {
  var data = e.data ? e.data.json() : { title: 'Prep Pulse', body: 'Study time! ⚡' };
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: './icon-192.png',
      badge: './icon-192.png',
      tag: 'preppulse2026',
      renotify: true
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
