(function(){

var CURRENT_CACHE = "bj";
var initial_cache =['.','index.html','css/style.css','js/index.js'];
	self.addEventListener('install',event=>{
		console.log('Installed service worker');
		skipWaiting();
	});
	self.addEventListener('activate',event=>{
		console.log('Activated');
		caches.open(CURRENT_CACHE)
		.then(cache=>{

				caches.open(CURRENT_CACHE).then(cache=>{
					cache.addAll(initial_cache);
				})
		})
		console.log('Done caching');
	});
})();