(function() {
  "use strict";
  
  var modal = document.querySelector(".modal-outer");
  var open = document.querySelector(".open-modal");
  var close = modal.querySelector(".modal-close");
  
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
    if (evt.key == "Escape" && !modal.classList.contains("is-hidden")) {
      handleModalClose();
    }
  }
  
  open.addEventListener("click", handleModalOpen);
  close.addEventListener("click", handleModalClose);
  modal.addEventListener("click", handleModalClick);
  window.addEventListener("keydown", handleKeyDown);
})();