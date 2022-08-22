// constants
const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

//functions

const showModal = () => {
  modalContainer.style.display = "block";
}

//try to experiment with uniting two below funcs in one piece

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

//OPTIONAL add some more buttons or try to use CSS preprocessor
