// Bài tập 1:
const text = document.getElementById("text");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

hide.onclick = () => {
  text.add.class = "none";
};

show.onclick = () => {
  text.style.display = "block";
};

// Bài tập 2:

const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("display-modal");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("display-modal");
});

window.addEventListener("click", (event) => {
  //   console.log(event.target);
  if (event.target === modal) {
    modal.classList.remove("display-modal");
  }
});
