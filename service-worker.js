/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "399992dbbc68d2c3f01a509421f9f7bd"
  },
  {
    "url": "about/index.html",
    "revision": "59c72c396da413f9cc6d4617a1451311"
  },
  {
    "url": "assets/css/0.styles.d40e60c9.css",
    "revision": "44507da82922aff44ce9ef3f7b867fae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.38bd274d.js",
    "revision": "98905a99a9f1f45af92d1a942c846294"
  },
  {
    "url": "assets/js/11.1b7913e3.js",
    "revision": "6f0c0d8a00d6b907aa71fd2fa74c2a61"
  },
  {
    "url": "assets/js/12.35e5b62e.js",
    "revision": "9f03bb3500759573ec9432b8b091713f"
  },
  {
    "url": "assets/js/2.7ed31506.js",
    "revision": "f2b09e13b7098bef80949aa97e5df245"
  },
  {
    "url": "assets/js/3.08c61e79.js",
    "revision": "66c20697b93a2b8bcbeb230f8c735270"
  },
  {
    "url": "assets/js/4.c4bd96f9.js",
    "revision": "489ff65029333f717f370ced18d73229"
  },
  {
    "url": "assets/js/5.f8ba208a.js",
    "revision": "ec13e0986d2431d2dbfd5dbd62910f8b"
  },
  {
    "url": "assets/js/6.5711c341.js",
    "revision": "2edb55716abe93e357aa665c1bf56650"
  },
  {
    "url": "assets/js/7.d4c5d315.js",
    "revision": "402f988d1c51c4189d229b920b6e1095"
  },
  {
    "url": "assets/js/8.9ec3ac6d.js",
    "revision": "e031fa83e6589aeaf478e435e52b2078"
  },
  {
    "url": "assets/js/9.c34ce39a.js",
    "revision": "8363e014119865a5ca747dfd5844e3cc"
  },
  {
    "url": "assets/js/app.3b2485cb.js",
    "revision": "e85f0d46adcce7a79eb379dbbac1a758"
  },
  {
    "url": "category/index.html",
    "revision": "2ef206ae5617f5f0ebc429cf58d43209"
  },
  {
    "url": "images/logo.png",
    "revision": "a7551dd129f7f982aa334f8ce7eaf44b"
  },
  {
    "url": "index.html",
    "revision": "8570761326b4de38c8d4802b2052260d"
  },
  {
    "url": "js/disable-user-zoom.js",
    "revision": "007095ea2c0831f2e4b41b29c316bfc0"
  },
  {
    "url": "mysql/mysql_45/index.html",
    "revision": "b32c375e0dc1727cc10e5ab7b93354ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
