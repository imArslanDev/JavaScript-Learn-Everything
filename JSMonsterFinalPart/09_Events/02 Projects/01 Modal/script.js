let openModalBtn = document.querySelector(".openModalBtn");
let closeModalBtn = document.querySelector(".closeModalBtn");
let modalContainer = document.querySelector(".modalContainer");

openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.style.display === "flex") {
    modalContainer.style.display = "none";
  }
});
