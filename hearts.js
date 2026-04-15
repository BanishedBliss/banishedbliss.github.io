const heartContainer = document.querySelector('.hearts');
const totalHearts = 120;

const protectedLeft = 0.15;
const protectedRight = 0.85;
const protectedTop = 0.13;
const protectedBottom = 0.81;

for (let i = 0; i < totalHearts; i++) {
    let left, top;
    while (true) {
        left = Math.random();
        top = Math.random();
        if (left < protectedLeft || left > protectedRight || top < protectedTop || top > protectedBottom) {
            break;
        }
    }

    const heart = document.createElement('div');
    heart.className = 'svg-heart';
    heart.style.left = `${left * 100}vw`;
    heart.style.top = `${top * 100}vh`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.innerHTML = `
    <svg viewBox="0 0 32 29" fill="pink" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6,2.6c-2.7,0-5,1.7-6.1,4.2C16.4,4.3,14.1,2.6,11.4,2.6C7.2,2.6,3.8,6,3.8,10.2c0,7.4,12,15.1,12,15.1
                s12-7.7,12-15.1C28.2,6,24.8,2.6,20.6,2.6z"/>
    </svg>`;

    heartContainer.appendChild(heart);
}