let textInput = document.querySelector("#validation-input");
let valid = document.querySelector("#validation-input.valid");
let invalid = document.querySelector("#validation-input.invalid");

textInput.addEventListener("blur", function (event) {
  if (textInput.value.length == 6) {
    event.target.style.borderColor = "#4caf50";
  } else {
    event.target.style.borderColor = "#f44336";
  }
});
