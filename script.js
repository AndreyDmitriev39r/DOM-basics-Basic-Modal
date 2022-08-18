// constants
const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

// console.log(openBtn, modalContainer, closeBtn);

//functions

const showModal = () => {
  modalContainer.style.display = "block";
}

const hideModalbyBtn = () => {
  modalContainer.style.display = "none";
}

const hideModalClickAnywhere = (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }    
}

// event listeners

openBtn.addEventListener('click', showModal);

closeBtn.addEventListener('click', hideModalbyBtn);

// to hide modal by click on any point of viewport
window.addEventListener('click', hideModalClickAnywhere);

//TODO some testing with logging e.target
