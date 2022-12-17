self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('qrcode-reader').then((cache) => cache.addAll([
            'index.html',
            'assets/instascan.min.js',
            'assets/icon.png',
            'assets/app.css',
            'assets/app.js'
        ]))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(
            (response) => response || fetch(e.request)
        ),
    );
});