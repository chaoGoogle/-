// 检查浏览器是否支持缓存清除功能
if ('cache' in navigator) {
    navigator.cache.clear();
}
// 调用清除缓存函数
clearCache();

// 定义一个清除缓存的函数
function clearCache() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", window.location.href, true);
    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    xhr.send();
}


