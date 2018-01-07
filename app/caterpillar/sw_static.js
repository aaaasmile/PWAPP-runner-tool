// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Generic service worker code.
 */

(function () {

  'use strict';

  /**
   * Performs a cache lookup on a request, ignoring GET parameters.
   *
   * @param {Cache} cache Cache to lookup the request in.
   * @param {Request} request Request to lookup.
   * @param {object=} opt_options Options to pass to Cache.match.
   * @returns {Promise}
   */
  var matchIgnoreParams = function (cache, request, opt_options) {
    var paramIndex = request.url.indexOf('?');
    if (paramIndex !== -1) {
      request = new Request(request.url.substring(0, paramIndex), {
          method: request.method,
          headers: request.headers,
          mode: 'same-origin', // need to set this properly
          credentials: request.credentials,
          redirect: 'manual'   // let browser handle redirects
      });
    }

    return cache.match(request, opt_options);
  };

  /**
   * Service worker activation event handler.
   *
   * Deletes caches that aren't present in CACHES.
   *
   * @param {event} e Activation event.
   */
  var onActivate = function (e) {
    // Delete old versions of caches.
    console.log('[ServiceWorker] Activate');
    var currentCaches = Object.keys(CACHES).map(k => CACHES[k]);
    e.waitUntil(caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cache => {
        if (currentCaches.indexOf(cache) === -1)
          return caches.delete(cache);
      })
    )));
  };
  self.addEventListener('activate', onActivate);

  /**
   * Service worker fetch event handler.
   *
   * Fetches resources from the cache if they are cached, or from the web if they
   * are not.
   *
   * @param {event} e Fetch event.
   * @return {response} Fetch response.
   */
  // Il fetch viene chiamato quando l'app richiede dei dati da fonti esterne e le memorizza in cache
  // Questo non è il caso della mia app, ma avviene anche quando vengono richiesti files della stessa app.
  var onFetch = function (e) {
    e.respondWith(caches.open(CACHES['app']).then(cache =>
      matchIgnoreParams(cache, e.request).then(response => {
        if (response) {
          console.log('Fetch from cache', CACHES['app'], CACHE_VERSION);
          return response;
        }

        // Cache miss, fetch from web.
        var fetchRequest = e.request.clone();
        // IgSa: qui ho del codice diverso rispetto al blog
        // var headers = new Headers({
        //   'Cache-Control': 'no-cache, no-store, must-revalidate',
        //   'Pragma': 'no-cache',
        //   'Expires': 0
        // });
        // console.log('Headers', headers);
        // return fetch(fetchRequest, {'headers': headers});
        return fetch(fetchRequest).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();
            console.log('Fetch from network and cache the response');
            caches.open(CACHES['app'])
              .then(function (cache) {
                cache.put(e.request, responseToCache);
              });

            return response;
          }
        );
      })
    ));
  };
  self.addEventListener('fetch', onFetch);

  /**
   * Service worker install event handler.
   *
   * Pre-caches all files in CACHED_FILES.
   *
   * @param {event} e Install event.
   */
  var onInstall = function (e) {
    e.waitUntil(
      caches.open(CACHES['app'])
        .then(cache => cache.addAll(CACHED_FILES)));
    console.log('Installed service worker.');
  };
  self.addEventListener('install', onInstall);

}).call(this);
