let maximum = parseInt(prompt("Enter your maximum number"));

while(!maximum){
  maximum = parseInt(prompt("Enter a valid number"));
}


const target = Math.floor(Math.random() * 10) + 1;
console.log(target);


let guess = parseInt(prompt("Guess a number"));
let attempt = 1;

while(guess !== target){
  attempt ++;
  if(guess>target){
    guess = parseInt(prompt("number is high, guess a lower number:"));
  }
  else if(guess<target){
    guess = parseInt(prompt("number is low, guess a higher number:"));
  }
}
console.log(`You got it!! It took you ${attempt} guesses.`);


