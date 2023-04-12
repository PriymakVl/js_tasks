 const  text = document.querySelector('.text');
 let visible = true;

 function mig() {
    if (visible == true) {
        text.style.display = 'none';
        visible = false;
    }
    else {
        text.style.display = 'block';
        visible = true;
    }
    setTimeout (mig, 400);
 }

 mig();

// setInterval(() => text.hidden = !text.hidden, 400);
    
