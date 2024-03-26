let letters = document.querySelectorAll('.letter');

letters.forEach(item => item.onmouseover = showText);
letters.forEach(item => item.onmouseout = hideText);

function showText() {
    this.style.textShadow = 'none';
    this.style.color = 'rgba(255, 255, 255, 1)';
}

function hideText() {
    this.style.textShadow = '0 0 .5em #fff';
    this.style.color = 'rgba(255, 255, 255, 0)';
}
