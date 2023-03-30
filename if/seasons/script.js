const select = document.querySelector('#season');
const img = document.querySelector('img');
const images = { 
    winter: 'img/winter.jpg',
    spring: 'img/spring.jpg',
    summer: 'img/summer.jpg',
    outumn: 'img/outumn.jpg'
}

select.onchange = selectImg;

function selectImg() {
    if (this.value == 'winter') {
        img.src = images[this.value];
    }
    else if (this.value == 'spring') {
        img.src = images[this.value];
    }
    else if (this.value == 'summer') {
        img.src = images[this.value];
    }
    else {
        img.src = images[this.value];
    }
}