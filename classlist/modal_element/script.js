	const body = document.body;
  const modal = document.querySelector(".modal");
	const openBtn = document.querySelector(".btn-open");
	const closeBtn = document.querySelector(".btn-close");

  openBtn.onclick = () => modal.classList.remove('is-hidden');
  closeBtn.onclick  = () => modal.classList.add('is-hidden');
  body.onclick = handleBodyClick;
  window.onkeydown = handleKeyDown;

  function handleBodyClick(evt) {
    if (evt.target == body && !modal.classList.contains("is-hidden")) {
      modal.classList.add('is-hidden');
    }
  }
  
  function handleKeyDown(evt) {
    if (evt.key == "Escape" && !modal.classList.contains("is-hidden")) {
      modal.classList.add('is-hidden');
    }
  }
  

