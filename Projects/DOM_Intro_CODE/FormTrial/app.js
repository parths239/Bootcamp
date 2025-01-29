const form = document.querySelector("form");
const input = document.querySelector("input")
const listItems = document.querySelector("#listItems")

form.addEventListener("submit", function(event){
  event.preventDefault();
  const item = input.value;

  const newItem = document.createElement("li");
  newItem.innerText = item;

  listItems.append(newItem);
  input.value = "";

});