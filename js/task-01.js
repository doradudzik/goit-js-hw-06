const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((category) => {
  const header = category.querySelector("h2");
  const items = Array.from(category.querySelectorAll("li"));

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${items.length}`);
});
