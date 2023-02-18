let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
