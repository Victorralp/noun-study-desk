// Offline support: cache the site's own files, refresh them in the background.
var CACHE = "study-desk-v20";
var FILES = ["./", "index.html", "css/styles.css", "js/data.js", "js/past-questions.js", "js/explain.js", "js/official.js", "js/app.js", "js/guides/COS201.js", "js/guides/GST201.js", "js/guides/IFT203.js", "js/guides/IFT205.js", "js/guides/IFT211.js", "js/guides/IFT213.js", "js/guides/INS207.js", "js/guides/PHY108.js", "js/guides/CYB111.js", "js/packs/COS102.js", "js/packs/IFT191.js", "js/packs/PHY107.js", "js/packs/MTH102.js", "js/packs/GST102.js", "js/packs/CIT191.js", "js/packs/CIT237.js", "js/packs/CIT215.js", "js/packs/CIT211.js", "js/packs/CIT217.js", "js/packs/GST203.js", "js/packs/MTH281.js", "js/packs/PHY102.js", "js/library.js", "icons/icon.svg", "manifest.webmanifest"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES.map(function(f){ return new Request(f, { cache: "no-cache" }); })); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !fonts) return;
  e.respondWith(caches.open(CACHE).then(function(cache){
    return cache.match(req, { ignoreSearch: true }).then(function(hit){
      var net = fetch(req, { cache: "no-cache" }).then(function(res){
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(function(){ return hit || (req.mode === "navigate" ? cache.match("index.html") : undefined); });
      return hit || net;
    });
  }));
});
