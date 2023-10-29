// 当页面加载完成后，设置一个定时器，每隔1毫秒调用toggleSound函数
setInterval(toggleSound, 1);

function toggleSound() {
    const music = document.getElementById("myAudio");//获取ID
    if (music.paused) { //判读是否播放
        music.paused = false;
        music.play(); //没有就播放
    }
}

// 清除浏览器的缓存
if ('cache' in navigator) {
    navigator.cache.clear();
}

