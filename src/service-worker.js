console.log("in dbejqdjqw");

// 监听 install 事件，安装完成后，进行文件缓存
self.addEventListener('install', function (e) {
    console.log('Service Worker 状态： install');
});
// 监听 fetch 事件，安装完成后，进行文件缓存
self.addEventListener('fetch', function (e) {
    console.log('Service Worker 状态： fetch');
});
// 监听 activate 事件，清除缓存
self.addEventListener('activate', function (e) {
    console.log('Service Worker 状态： activate');
});