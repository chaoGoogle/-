// 检查浏览器是否支持缓存清除功能
if ('cache' in navigator) {
    navigator.cache.clear();
}

// 定义一个清除缓存的函数
function clearCache() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", window.location.href, true);
    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    xhr.send();
}

// 调用清除缓存函数
clearCache();
//当页面加载完成后，设置一个定时器，每隔1毫秒调用toggleSound函数
setInterval(toggleSound, 1);

function toggleSound() {
    const music = document.getElementById("myAudio");//获取ID
    if (music.paused) { //判读是否播放
        music.paused = false;
        music.play(); //没有就播放
    }
}
