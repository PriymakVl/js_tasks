let wheel = document.querySelector(".wheel");
let btn = document.getElementById("spin");
let angle = 0;

btn.onclick = spinWheel;

function spinWheel() {
    angle += Math.ceil(Math.random() * 1000);
    wheel.style.transform = `rotate(${angle}deg)`;  
}