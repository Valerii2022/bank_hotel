(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-mob-open]"),
     closeModalBtn: document.querySelector("[data-mob-close]"),
     modal: document.querySelector("[data-mob]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal() {
      document.body.classList.toggle("no-scroll");
      refs.modal.classList.toggle("is-hidden");
   }
 })();