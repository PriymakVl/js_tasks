const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

btnEl.addEventListener("click", addNote);

function addNote() {
  const noteEl = createNoteEl();
  // добвление элемента перед кнопкой
  appEl.insertBefore(noteEl, btnEl);
  // удаление по двойному клику
  noteEl.ondblclick = () => noteEl.remove();
}

function createNoteEl() {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Пустая заметка";
  return element;
}





