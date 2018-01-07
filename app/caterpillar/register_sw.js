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
 * Registers the service worker sw.js.
 */

 // originale di caterpillar
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js').catch(e =>
//     console.warn('Service worker could not be registered with error ', e));
// } else {
//   throw new Error('Service workers not supported in this browser. ' +
//     'Some functionality may be unavailable.');
// }

// copiato da https://developers.google.com/web/fundamentals/primers/service-workers/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
} else {
  throw new Error('Service workers not supported in this browser. ' +
    'Some functionality may be unavailable.');
}