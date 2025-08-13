// Service Worker for Terminal Portfolio - Security Hardened
const CACHE_NAME = 'terminal-portfolio-v1';
const ALLOWED_ORIGINS = [
	self.location.origin,
	'https://fonts.googleapis.com',
	'https://fonts.gstatic.com'
];

const urlsToCache = [
	'/',
	'/favicon.png',
	'/manifest.json',
	'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap'
];

// Security helper function
function isAllowedRequest(request) {
	const url = new URL(request.url);
	
	// Only cache GET requests
	if (request.method !== 'GET') {
		return false;
	}
	
	// Check if origin is in allowed list
	if (!ALLOWED_ORIGINS.includes(url.origin)) {
		return false;
	}
	
	// Block potentially dangerous file extensions
	const dangerousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.vbs', '.js'];
	if (dangerousExtensions.some(ext => url.pathname.endsWith(ext))) {
		return false;
	}
	
	return true;
}

// Install event - cache resources securely
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log('SW: Cache opened');
				// Only cache allowed URLs
				const safeUrls = urlsToCache.filter(url => {
					try {
						const testUrl = new URL(url, self.location.origin);
						return ALLOWED_ORIGINS.includes(testUrl.origin);
					} catch {
						return false;
					}
				});
				return cache.addAll(safeUrls);
			})
			.catch((error) => {
				console.error('SW: Cache installation failed', error);
			})
	);
	// Force activation
	self.skipWaiting();
});

// Fetch event - serve from cache with security checks
self.addEventListener('fetch', (event) => {
	// Only handle allowed requests
	if (!isAllowedRequest(event.request)) {
		return;
	}
	
	event.respondWith(
		caches.match(event.request)
			.then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}
				
				// Clone request for network fetch
				const fetchRequest = event.request.clone();
				
				return fetch(fetchRequest)
					.then((response) => {
						// Check if valid response
						if (!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}
						
						// Only cache successful responses from allowed origins
						const responseUrl = new URL(response.url);
						if (ALLOWED_ORIGINS.includes(responseUrl.origin)) {
							const responseToCache = response.clone();
							caches.open(CACHE_NAME)
								.then((cache) => {
									cache.put(event.request, responseToCache);
								});
						}
						
						return response;
					})
					.catch((error) => {
						console.error('SW: Fetch failed', error);
						// Return offline fallback if available
						return caches.match('/');
					});
			})
	);
});

// Activate event - clean up old caches securely
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						if (cacheName !== CACHE_NAME) {
							console.log('SW: Deleting old cache:', cacheName);
							return caches.delete(cacheName);
						}
					})
				);
			})
			.then(() => {
				// Take control of all clients
				return self.clients.claim();
			})
	);
});

// Handle service worker messages securely
self.addEventListener('message', (event) => {
	// Validate message origin
	if (event.origin !== self.location.origin) {
		return;
	}
	
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});

// Error handling
self.addEventListener('error', (event) => {
	console.error('SW: Error occurred', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
	console.error('SW: Unhandled promise rejection', event.reason);
});