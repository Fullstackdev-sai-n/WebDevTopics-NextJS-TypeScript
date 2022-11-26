try {
	const PRECACHE = "stackweb-precache-v8";
	const RUNTIME = "stackweb-runtime";

	const PRECACHE_URLS = [
		"/",
		"/css",
		"/javascript",
		"/machinelearning",
		"/next13overview",
		"/webcomponents",
	];

	self.addEventListener("install", (event) => {
		console.log("installing sw");
		event.preventDefault();
		event.waitUntil(
			caches
				.open(PRECACHE)
				.then((cache) => cache.addAll(PRECACHE_URLS))
				.then(self.skipWaiting())
		);
	});

	self.addEventListener("activate", (event) => {
		event.preventDefault();
		const currentCaches = [PRECACHE, RUNTIME];
		console.log("activate cache");
		event.waitUntil(
			caches
				.keys()
				.then((cacheNames) => {
					return cacheNames.filter(
						(cacheName) => !currentCaches.includes(cacheName)
					);
				})
				.then((cachesToDelete) => {
					console.log("cache is deleting");
					return Promise.all(
						cachesToDelete.map((cacheToDelete) => {
							return caches.delete(cacheToDelete);
						})
					);
				})
				.then(() => self.clients.claim())
		);
	});

	self.addEventListener("fetch", (event) => {
		event.preventDefault();
		if (event.request.url.startsWith(self.location.origin)) {
			event.respondWith(
				caches.match(event.request).then((cachedResponse) => {
					if (cachedResponse) {
						return cachedResponse;
					}

					return caches.open(RUNTIME).then((cache) => {
						return fetch(event.request, {}).then((response) => {
							return cache.put(event.request, response.clone()).then(() => {
								return response;
							});
						});
					});
				})
			);
		}
	});
} catch (e) {
	console.log(e);
}
