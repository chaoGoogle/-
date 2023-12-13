text = ["你好呀~", "点我呀~", "啦啦啦~", "哎呀呀~", "帅哥美女~", "哦~", "咦~"];
let count = 0;

function createImage() {
    const x = event.pageX - 18;
    const y = event.pageY - 30;
    const img = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const under = document.createElement("div");
    const txt = document.createElement("div");
    const textNode = document.createTextNode(text[parseInt(Math.random() * text.length)]);
    txt.appendChild(textNode);
    img.className = "img" + " " + "img" + count;
    left.className = "left";
    right.className = "right";
    under.className = "under";
    txt.className = "text";
    img.style.top = y + "px";
    img.style.left = x + "px";
    img.appendChild(left);
    img.appendChild(right);
    img.appendChild(under);
    img.appendChild(txt);
    document.body.appendChild(img);
    const color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
    txt.style.color = color;
    for (let i = 0; i < 3; i++) {
        img.children[i].style.background = color;
    }
    setTimeout(() => {
        removeImage();
    }, 500);
}

function removeImage() {
    const images = document.querySelectorAll('.img');
    Array.from(images).reverse().forEach(img => {
        img.style.transform = "scale(0.5)";
        img.style.transform = "translateY(-40px)";
        img.style.opacity = "0";
    });
    count = 0;
}


document.body.onmousedown = createImage;

document.body.addEventListener('mouseup', removeImage, false);

document.body.onmousedown = createImage;