/* 播放和暂停按钮的文本 */
let buttonText = '播放';
let buttonText1 = '暂停';

/* 播放和暂停函数 */
function playPause() {
    /* 获取按钮 */
    const button = document.getElementById('player1').getElementsByTagName('button')[0];
    /* 如果音频正在播放，则暂停 */
    if (audio.paused) {
        audio.play();
        button.textContent = buttonText1;
    } else {
        /* 如果音频正在暂停，则播放 */
        audio.pause();
        button.textContent = buttonText;
    }
}
