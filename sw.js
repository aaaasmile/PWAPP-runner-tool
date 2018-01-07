/**
 * Service worker generated by Caterpillar.
 */

/**
 * Current cache version.
 *
 * Increment this to force cache to clear.
 */
var CACHE_VERSION = 125473;

/**
 * Object mapping a cache identifier to the actual, versioned cache name.
 */
var CACHES = {
  'app': 'app-cache-v' + CACHE_VERSION
};

/**
 * An array of filenames of cached files.
 */
var CACHED_FILES = [
  'Counter_128.png',
  'Counter_16.png',
  'Counter_24.png',
  'Counter_48.png',
  '_locales/de/messages.json',
  '_locales/en/messages.json',
  '_locales/it/messages.json',
  'app.info.js',
  'app/toolrun_lib.js',
  'app/view_toolrun.js',
  'caterpillar/caterpillar.js',
  'caterpillar/register_sw.js',
  'caterpillar/sw_static.js',
  'css/general.css',
  'css/start/images/ui-bg_flat_55_999999_40x100.png',
  'css/start/images/ui-bg_flat_75_aaaaaa_40x100.png',
  'css/start/images/ui-bg_glass_45_0078ae_1x400.png',
  'css/start/images/ui-bg_glass_55_f8da4e_1x400.png',
  'css/start/images/ui-bg_glass_75_79c9ec_1x400.png',
  'css/start/images/ui-bg_gloss-wave_45_e14f1c_500x100.png',
  'css/start/images/ui-bg_gloss-wave_50_6eac2c_500x100.png',
  'css/start/images/ui-bg_gloss-wave_75_2191c0_500x100.png',
  'css/start/images/ui-bg_inset-hard_100_fcfdfd_1x100.png',
  'css/start/images/ui-icons_0078ae_256x240.png',
  'css/start/images/ui-icons_056b93_256x240.png',
  'css/start/images/ui-icons_d8e7f3_256x240.png',
  'css/start/images/ui-icons_e0fdff_256x240.png',
  'css/start/images/ui-icons_f5e175_256x240.png',
  'css/start/images/ui-icons_f7a50d_256x240.png',
  'css/start/images/ui-icons_fcd113_256x240.png',
  'css/start/jquery-ui-1.8.16.custom.css',
  'index.html',
  'lib/combobox.js',
  'lib/jquery-1.8.3.min.js',
  'lib/jquery-ui-1.8.23.min.js',
  'lib/list.js',
  'lib/sprintf-0.7-beta1.js',
  'main.js',
  'manifest.webmanifest'
];

importScripts('caterpillar/caterpillar.js');
importScripts('caterpillar/sw_static.js');

// TODO(Caterpillar): Edit background scripts to remove chrome.app.runtime
// dependence.
importScripts('main.js');
