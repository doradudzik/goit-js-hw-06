// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector('input[type="number"]');
const boxesCollection = document.querySelector("#boxes");

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
  let numberOfBoxes = [];
  for (let i = 1; i <= input.value; i++) {
    numberOfBoxes.push(i);
  }
  amount = numberOfBoxes;
  for (let number of amount) {
    boxesCollection.insertAdjacentHTML(
      "beforeend",
      `<div class="box-item" style="width:30px;height:30px;background-color:${getRandomHexColor()}; margin:10px"></div>`
    );
  }
};
destroyBtn.addEventListener("click", () => {
  //  Usuwanie div:
  destroyBoxes();
});

const destroyBoxes = () => {
  boxesCollection.innerHTML = "";
};
