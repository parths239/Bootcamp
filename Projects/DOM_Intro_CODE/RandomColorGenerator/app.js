const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const colorButton = document.querySelector("#colorButton");

const changeColor = function(){

  const red = Math.floor(Math.random()*255)+1;
  const green = Math.floor(Math.random()*255)+1;
  const blue = Math.floor(Math.random()*255)+1;

  const color = `rgb(${red}, ${green}, ${blue})`;

  h1.innerText = `${color}`;
  body.style.backgroundColor= `rgb(${red} ,${green}, ${blue})`;

}

colorButton.addEventListener("click", changeColor)