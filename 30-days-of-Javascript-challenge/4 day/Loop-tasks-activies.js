// task -1 For Loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} =`, i * 5);
// }

// task -2 while loop

// let i = 0;
// let r = 0;

// while (i <= 10) {
//   r += i;

//   i++;
// }
// console.log(r);

// let i = 11;

// while (i > 1) {
//   i--;
//   console.log(i);
// }

// task -3 do...while Loop

// let i = 1;
// do {
//   console.log(i);
//   ++i;
// } while (i <= 5);

// let i = 10;
// let a = 0;
// let b = 1;
// do {
//   let c = a + b;
//   b = a;
//   a = c;
//   console.log(c);
//   i--;
// } while (i > 0);

// task 4 nested loop

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}

