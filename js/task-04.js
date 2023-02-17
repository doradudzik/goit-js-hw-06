let minusBtn = document.querySelector('button[data-action="decrement"]');
let plusBtn = document.querySelector('button[data-action="increment"]');
let value = document.querySelector("#value");

let counterValue = 0;

function updateDisplay() {
  value.innerHTML = counterValue;
}

plusBtn.addEventListener("click", () => {
  counterValue++;
  updateDisplay();
});

minusBtn.addEventListener("click", () => {
  counterValue--;
  updateDisplay();
});
