let items = document.querySelectorAll('.traffic-light div');
let btn = document.querySelector('.btn');
let color = 'yellow';

console.log(items);
items[1].style.backgroundColor = 'yellow';
btn.onclick = changeColor;

function changeColor(){
    if(color == 'yellow'){
        items[2].style.backgroundColor = 'red';
        items[1].style.backgroundColor = 'grey';
        color = 'red';
    }
    else if(color == 'red'){
        items[2].style.backgroundColor = 'grey';
        items[0].style.backgroundColor = 'green';
        color = 'green';
    }
    else{
        items[0].style.backgroundColor = 'grey';
        items[1].style.backgroundColor = 'yellow';
        color = 'yellow';
    }
}
