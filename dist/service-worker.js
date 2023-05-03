/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/service-worker.js":
/*!*******************************!*\
  !*** ./src/service-worker.js ***!
  \*******************************/
/***/ (() => {

eval("\r\n// Here make implementation of service worker\r\nconst CACHE_NAME = 'my-cache-v1';\r\nconst urlsToCache = ['./index.html', './bundle.js', './style.css'];\r\n\r\nself.addEventListener('install', (event) => {\r\n  console.log('Service worker installed');\r\n  event.waitUntil(\r\n    caches\r\n      .open(CACHE_NAME)\r\n      .then((cache) => cache.addAll(urlsToCache))\r\n      .then(() => self.skipWaiting())\r\n  );\r\n});\r\n\r\nself.addEventListener('activate', (event) => {\r\n  console.log('Service worker activated');\r\n  event.waitUntil(\r\n    caches\r\n      .keys()\r\n      .then((cacheNames) => {\r\n        return Promise.all(\r\n          cacheNames\r\n            .filter((cacheName) => {\r\n              return cacheName.startsWith('my-cache-') && cacheName !== CACHE_NAME;\r\n            })\r\n            .map((cacheName) => caches.delete(cacheName))\r\n        );\r\n      })\r\n      .then(() => self.clients.claim())\r\n  );\r\n});\r\n\r\nself.addEventListener('fetch', (event) => {\r\n  console.log('Service worker fetching:', event.request.url);\r\n  event.respondWith(\r\n    caches.match(event.request).then((response) => {\r\n      if (response) {\r\n        console.log('Cache hit:', event.request.url);\r\n        return response;\r\n      }\r\n      console.log('Cache miss:', event.request.url);\r\n      return fetch(event.request);\r\n    })\r\n  );\r\n});\n\n//# sourceURL=webpack://webpack-project/./src/service-worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/service-worker.js"]();
/******/ 	
/******/ })()
;