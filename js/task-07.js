let slider = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

slider.addEventListener("input", function (event) {
  let size = slider.value;
  text.style.fontSize = size + "px";
});
