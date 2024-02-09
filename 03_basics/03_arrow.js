const user = {
  userName: "atul",
  price: 11111,
  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "ram";
// user.welcomeMessage();

// console.log(this);

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

// const myArray =
 [2, 5, 3, 7, 8]

// myArray.forEach()
