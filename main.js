
// 清除浏览器的缓存
if ('cache' in navigator) {
    navigator.cache.clear();
}

function clearCache() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", window.location.href, true);
  xhr.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhr.send();
}

clearCache();
