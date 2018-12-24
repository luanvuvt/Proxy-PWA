importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  workbox.strategies.staleWhileRevalidate()
);