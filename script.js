// Selección de elementos
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

// Acción al presionar YES
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "flex";
});

// Acción al presionar NO (se mueve para que no lo cliques fácil 😅)
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100; // movimiento horizontal
  const y = Math.floor(Math.random() * 200) - 100; // movimiento vertical
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});