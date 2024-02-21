# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javaScript

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');
// console.log(body);

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target.id);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project 2

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#results");
  // console.log(height);
  // console.log(weight);
  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "plese give a velide height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "plese give a velide weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let rang;
    if (bmi < 18.6) {
      rang = "Under Weight";
    } else if (bmi > 24.9) {
      rang = "Overweight";
    } else {
      rang = "Normal Range";
    }
    result.innerHTML = `<span>your BIM is :${bmi} and you are ${rang}</span>`;
  }
});
```

## project 3

```javascript
const clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

# project 4

```javascript
let randNum = Math.floor(Math.random() * 100) + 1;

const Submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    console.log(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("please enter a valid numner");
  } else {
    prevGuess.push(guess);
    // console.log(prevGuess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Rendom number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randNum) {
    displayMessage(`Number is too low`);
  } else if (guess > randNum) {
    displayMessage(`number is too high `);
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    lowOrHi.innerHTML = "";
    resultParas.removeChild(p);

    playGame = true;
  });
};
```
