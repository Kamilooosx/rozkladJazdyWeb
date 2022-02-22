const CACHE_NAME = "localhost-v2";

self.addEventListener("install", event => {

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll([
            "/",
            "android-chrome-192x192.png",
            "android-chrome-512x512.png",
            "apple-touch-icon.png",
            "browserconfig.xml",
            "favicon.ico",
            "mstile-150x150.png",
            "safari-pinned-tab.svg",
            "site.webmanifest",
            "favicon-16x16.png",
            "favicon-32x32.png",
            "index.js",
            "css/style.css",
            "/offline/offline.html",
            "/offline/js/scripts.js",
            "/offline/api/quotes.json"
        ]))
    );

}, false);

self.addEventListener("activate", event => {

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                .filter(cacheName => cacheName !== CACHE_NAME)
                .map(cacheName => caches.delete(cacheName))
            );
        })
    );

}, false);

self.addEventListener("fetch", event => {

    // event.respondWith(
    //     caches.match(event.request)
    //         .then(response => {
    //             return response || fetch(event.request)''
    //         })
    // );

    const url = new URL(event.request.url);

    if (url.pathname === "/") {

        event.respondWith(
            fetch(event.request)
            .catch(err => {
                return caches.open(CACHE_NAME)
                    .then(cache => cache.match("offline/offline.html"));
            })
        );

    }

    if (url.pathname.includes("/offline/")) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => cache.match(event.request))
        );
    }

}, false);

