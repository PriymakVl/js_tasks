	let modal = document.querySelector(".modal-outer");
	let open = document.querySelector(".open-modal");
	let close = modal.querySelector(".modal-close");
  
  function handleModalOpen() {
    modal.classList.remove("is-hidden");
  }
  
  function handleModalClose() {
    modal.classList.add("is-hidden");
  }
  
  function handleModalClick(evt) {
    if (!evt.target.closest(".modal-inner")) {
      handleModalClose();
    }
  }
  
  function handleKeyDown(evt) {
	  console.log(evt.key);
    if (evt.key == "Escape" && !modal.classList.contains("is-hidden")) {
      handleModalClose();
    }
  }
  
  open.addEventListener("click", handleModalOpen);
  close.addEventListener("click", handleModalClose);
  modal.addEventListener("click", handleModalClick);
  window.addEventListener("keydown", handleKeyDown);
