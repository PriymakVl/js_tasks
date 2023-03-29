const labels = document.querySelectorAll('.form-control label');

function createEffect(label) {
    let arr = label.innerText.split('');
    label.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        label.innerHTML += `<span style="transition-delay:${i * 50}ms">${arr[i]}</span>`
    }
}

createEffect(labels[0]);
createEffect(labels[1]);

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//         .join('')
// })
