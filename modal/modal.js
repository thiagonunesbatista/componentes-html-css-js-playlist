const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modalElement = document.getElementById("modal");

const toggleModal = () => modalElement.classList.toggle("modal-open");

const handleModalOverlayClick = event => {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
};

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
modalElement.addEventListener("click", handleModalOverlayClick);
