// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for(let i = 1; i<= 150; i++){
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemonCard');

  const newImg = document.createElement('img');
  const newLable = document.createElement('p')

  newLable.innerText = `#${i}`
  newImg.src = `${link}${i}.png`;
  pokemonCard.appendChild(newImg);
  pokemonCard.appendChild(newLable);

  container.appendChild(pokemonCard);
}

const btn = document.querySelector("#trialButton");

btn.addEventListener('click',function(){
  alert("You clicked me!");
})