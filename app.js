const cards = document.querySelectorAll(".card");
const btns = document.querySelectorAll("button");

console.log(cards);
console.log(btns);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((card) => card.classList.remove("active"));
    card.classList.add("active");
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active-btn");
      btn.classList.add("active-btn");
    });
  });
});
