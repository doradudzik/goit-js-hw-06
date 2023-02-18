const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector('input[type="number"]');
const boxesCollection = document.querySelector("#boxes");
let numberOfBoxes = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  //  Dodawanie odpowiedniej liczby div:
  createBoxes();
  getRandomHexColor();
});

const createBoxes = (amount) => {
  amount = input.value;
  for (let i = 1; i <= amount; i++) {
    numberOfBoxes.push(i);
  }
  console.log(numberOfBoxes);
  for (let number of numberOfBoxes) {
    const divBox = document.createElement("div");
    boxesCollection.append(divBox);
    // Style divBox:
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    divBox.style.width = 30 + 10 * number + "px";
    divBox.style.height = 30 + 10 * number + "px";
    divBox.style.margin = "10px";
  }
};

destroyBtn.addEventListener("click", () => {
  //  Usuwanie div:
  destroyBoxes();
});

const destroyBoxes = () => {
  boxesCollection.innerHTML = "";
};
