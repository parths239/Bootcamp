const randomColorGenerator = function(){
  const red = Math.floor(Math.random()*255)+1;
  const green = Math.floor(Math.random()*255)+1;
  const blue = Math.floor(Math.random()*255)+1;

  return `rgb(${red},${green},${blue})`;
}



const buttons = document.querySelectorAll("button");

for(let button of buttons){

  button.addEventListener("mouseover", function (){
    button.style.backgroundColor = randomColorGenerator();
  });


}