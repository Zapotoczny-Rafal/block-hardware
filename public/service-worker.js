const CACHE_NAME = 'pwa-cache'
const toCache = [
  '/',
  '/css/index.css',
  'https://grainy-gradients.vercel.app/noise.svg',
  '/images/svg/logo.svg',
  '/images/svg/coins.svg',
  '/images/svg/cart.svg',
  '/images/svg/service.svg',
  '/images/svg/truck.svg',
  '/images/png/logo.png',
  '/images/png/logo-192.png',
  '/javascript/manifest.json',
  '/javascript/app.js',
  '/javascript/scrollable.js',
  '/javascript/scrolltop.js',
  '/javascript/pwa.js'
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(toCache)
      })
      .then(self.skipWaiting())
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match(event.request)
          })
      })
  )
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
})
