const CACHE = "V2.4";

const FILES_TO_CACHE = [
    'manifest.json',
    '/scripts/jquery.js',
    '/scripts/jqueryUI.js',
    '/',
    '/index.html',
    '/AnimatedBG/skygame-banner2.mp4',
    '/app.js',
  //'/appBeta.js',
  //'/beta.html',
    '/songComposerStyle.css',
    '/songComposer.html',
    '/style.css',
    '/reverb4.wav',
    '/favicon.png',
    '/menu.png',
    //Piano
    '/Sounds/Piano/0.mp3',
    '/Sounds/Piano/1.mp3',
    '/Sounds/Piano/2.mp3',
    '/Sounds/Piano/3.mp3',
    '/Sounds/Piano/4.mp3',
    '/Sounds/Piano/5.mp3',
    '/Sounds/Piano/6.mp3',
    '/Sounds/Piano/7.mp3',
    '/Sounds/Piano/8.mp3',
    '/Sounds/Piano/9.mp3',
    '/Sounds/Piano/10.mp3',
    '/Sounds/Piano/11.mp3',
    '/Sounds/Piano/12.mp3',
    '/Sounds/Piano/13.mp3',
    '/Sounds/Piano/14.mp3',
    //xylophone
    '/Sounds/Xylophone/0.mp3',
    '/Sounds/Xylophone/1.mp3',
    '/Sounds/Xylophone/2.mp3',
    '/Sounds/Xylophone/3.mp3',
    '/Sounds/Xylophone/4.mp3',
    '/Sounds/Xylophone/5.mp3',
    '/Sounds/Xylophone/6.mp3',
    '/Sounds/Xylophone/7.mp3',
    '/Sounds/Xylophone/8.mp3',
    '/Sounds/Xylophone/9.mp3',
    '/Sounds/Xylophone/10.mp3',
    '/Sounds/Xylophone/11.mp3',
    '/Sounds/Xylophone/12.mp3',
    '/Sounds/Xylophone/13.mp3',
    '/Sounds/Xylophone/14.mp3',
    //horn
    '/Sounds/Horn/0.mp3',
    '/Sounds/Horn/1.mp3',
    '/Sounds/Horn/2.mp3',
    '/Sounds/Horn/3.mp3',
    '/Sounds/Horn/4.mp3',
    '/Sounds/Horn/5.mp3',
    '/Sounds/Horn/6.mp3',
    '/Sounds/Horn/7.mp3',
    '/Sounds/Horn/8.mp3',
    '/Sounds/Horn/9.mp3',
    '/Sounds/Horn/10.mp3',
    '/Sounds/Horn/11.mp3',
    '/Sounds/Horn/12.mp3',
    '/Sounds/Horn/13.mp3',
    '/Sounds/Horn/14.mp3',
    //harp
    '/Sounds/Harp/0.mp3',
    '/Sounds/Harp/1.mp3',
    '/Sounds/Harp/2.mp3',
    '/Sounds/Harp/3.mp3',
    '/Sounds/Harp/4.mp3',
    '/Sounds/Harp/5.mp3',
    '/Sounds/Harp/6.mp3',
    '/Sounds/Harp/7.mp3',
    '/Sounds/Harp/8.mp3',
    '/Sounds/Harp/9.mp3',
    '/Sounds/Harp/10.mp3',
    '/Sounds/Harp/11.mp3',
    '/Sounds/Harp/12.mp3',
    '/Sounds/Harp/13.mp3',
    '/Sounds/Harp/14.mp3',
    //flute
    '/Sounds/Flute/0.mp3',
    '/Sounds/Flute/1.mp3',
    '/Sounds/Flute/2.mp3',
    '/Sounds/Flute/3.mp3',
    '/Sounds/Flute/4.mp3',
    '/Sounds/Flute/5.mp3',
    '/Sounds/Flute/6.mp3',
    '/Sounds/Flute/7.mp3',
    '/Sounds/Flute/8.mp3',
    '/Sounds/Flute/9.mp3',
    '/Sounds/Flute/10.mp3',
    '/Sounds/Flute/11.mp3',
    '/Sounds/Flute/12.mp3',
    '/Sounds/Flute/13.mp3',
    '/Sounds/Flute/14.mp3',
    //guitar
    '/Sounds/Guitar/0.mp3',
    '/Sounds/Guitar/1.mp3',
    '/Sounds/Guitar/2.mp3',
    '/Sounds/Guitar/3.mp3',
    '/Sounds/Guitar/4.mp3',
    '/Sounds/Guitar/5.mp3',
    '/Sounds/Guitar/6.mp3',
    '/Sounds/Guitar/7.mp3',
    '/Sounds/Guitar/8.mp3',
    '/Sounds/Guitar/9.mp3',
    '/Sounds/Guitar/10.mp3',
    '/Sounds/Guitar/11.mp3',
    '/Sounds/Guitar/12.mp3',
    '/Sounds/Guitar/13.mp3',
    '/Sounds/Guitar/14.mp3',
    //oldHarp
    '/Sounds/OldHarp/0.mp3',
    '/Sounds/OldHarp/1.mp3',
    '/Sounds/OldHarp/2.mp3',
    '/Sounds/OldHarp/3.mp3',
    '/Sounds/OldHarp/4.mp3',
    '/Sounds/OldHarp/5.mp3',
    '/Sounds/OldHarp/6.mp3',
    '/Sounds/OldHarp/7.mp3',
    '/Sounds/OldHarp/8.mp3',
    '/Sounds/OldHarp/9.mp3',
    '/Sounds/OldHarp/10.mp3',
    '/Sounds/OldHarp/11.mp3',
    '/Sounds/OldHarp/12.mp3',
    '/Sounds/OldHarp/13.mp3',
    '/Sounds/OldHarp/14.mp3',
    //bells
    '/Sounds/Bells/0.mp3',
    '/Sounds/Bells/1.mp3',
    '/Sounds/Bells/2.mp3',
    '/Sounds/Bells/3.mp3',
    '/Sounds/Bells/4.mp3',
    '/Sounds/Bells/5.mp3',
    '/Sounds/Bells/6.mp3',
    '/Sounds/Bells/7.mp3',
    //drum
    '/Sounds/Drum/0.mp3',
    '/Sounds/Drum/1.mp3',
    '/Sounds/Drum/2.mp3',
    '/Sounds/Drum/3.mp3',
    '/Sounds/Drum/4.mp3',
    '/Sounds/Drum/5.mp3',
    '/Sounds/Drum/6.mp3',
    '/Sounds/Drum/7.mp3',
    //icons
    '/icons/next_back_arrows.svg',
    '/icons/settingsIcon.svg',
    '/icons/download.png',
    '/icons/exitFullScreen.png',
    '/icons/reverb.png',
    '/icons/rotate.svg',
    '/icons/saveToDb.png',
    '/icons/stop.png',
    '/images/piano.png',
    '/images/harp.png',
    '/images/guitar.png',
    '/images/bell.png',
    '/images/drum.png',
    '/images/horn.png',
    '/images/xylophone.png',
    '/images/flute.png',
    //key images
    '/KeyImages/Circle.png',
    '/KeyImages/Diamond.png',
    '/KeyImages/diamondCircle.png',
    '/KeyImages/Circle.svg',
    '/KeyImages/Diamond.svg',
    '/KeyImages/diamondCircle.svg',
    '/scripts/Midi.js'
    ];
    
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.CacheFirst({
        cacheName: CACHE
    })
);

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    evt.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});
