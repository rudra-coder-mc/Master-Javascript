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
