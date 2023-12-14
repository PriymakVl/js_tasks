const lightLabel = document.querySelector('.label-light');
const darkLabel = document.querySelector('.label-dark');
const body = document.body;

lightLabel.addEventListener('click', setTheme);
darkLabel.addEventListener('click', setTheme);

function setTheme() {
    let colorBg = this.querySelector('input').value;
    body.style.backgroundColor = colorBg;
    let colorText = this.dataset.color;
    setColorLabelText(colorText);
}

function setColorLabelText(color) {
    document.querySelector('.label-light span').style.color = color;
    document.querySelector('.label-dark span').style.color = color;
}

