let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

if (a > b) {
    alert('Большее число ' + a);
}
else if (b > a) {
    alert('Большее число ' + b);
}
else {
    alert('Числа равны');
}