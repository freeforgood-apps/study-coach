// Study Coach offline helper.
// Saves a copy of the app the first time it loads, so it keeps working without internet.
// Always tries the network first, so updates show up as soon as you're back online.
const CACHE = "study-coach-2.6.3";   // "study-coach-" + APP_VERSION

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(["./"])).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("study-coach-") && k !== CACHE).map(k => caches.delete(k))))   // only our own: other apps share this address
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./")))
  );
});
