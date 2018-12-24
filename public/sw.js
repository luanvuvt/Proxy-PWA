importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

const matchCb = ({url, event}) => {
  return (url.pathname === '/');
};

workbox.routing.registerRoute(
  matchCb,
  workbox.strategies.cacheFirst({
    cacheName: 'index-page',
  })
);

workbox.routing.registerRoute(
  new RegExp('.*\.html'),
  workbox.strategies.cacheFirst({
    cacheName: 'inner-pages',
  })
);