let timer;
self.addEventListener('message', event => {
    if (event.data.type === 'START_TIMER') {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
            self.registration.showNotification('BİK Pro 💧', {
                body: 'su içme vaktiii!',
                icon: 'https://via.placeholder.com/192/ff6b81/ffffff?text=BIK',
                vibrate: [200, 100, 200],
                tag: 'su-uyari'
            });
        }, event.data.interval);
    }
    if (event.data.type === 'STOP_TIMER') clearInterval(timer);
});

self.addEventListener('install', () => self.skipWaiting());
