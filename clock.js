const span = document.querySelectorAll('span');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ampm = document.querySelector('.ampm');

setTime();
setAnimation();
setInterval(setTime, 1000);
setInterval(setAnimation, 1000);


function setAnimation() {
    for (let i = 0; i < 4; i++){
        span[i].style.animation = `child${i} 1s linear ${i}s`;
    }
    removeAnimation();
}
function removeAnimation() {
    span[3].addEventListener('animationend', () => {
        for (var i = 0; i < 4; i++){
            span[i].style.animation = ``;
        }
    })
}

function setTime() {
    let date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    setDigit(h, m, s);
}
function setDigit(h, m, s) {
    ampm.textContent = (h > 11) ? `pm` : `am`;
    minutes.textContent = (m < 10) ? `0${m}` : m;
    seconds.textContent = (s < 10) ? `0${s}` : s;
    h = (h % 12);
    hours.textContent = (h == 0) ? '12' : h;
}

