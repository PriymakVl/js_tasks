const openModalBtnElememt = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalContentElement = document.querySelector('.modal__content');

openModalBtnElememt.onclick = showModal;
modalContentElement.onclick = hideModal;

function showModal() {
    modalElement.style.display = 'flex';
}

function hideModal() {
    modalElement.style.display = 'none';
}