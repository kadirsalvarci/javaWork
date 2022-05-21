//  Exercise 1
console.log("EXERCISE 1");
const fruits = ["banana", "apple", "pear", "kiwi", "orange"];

fruits.forEach((fruit) => {
  switch (fruit) {
    case "banana":
      console.log(`I like ${fruit}`);
      break;
    case "pear":
      console.log(`I like ${fruit}`);
      break;
    case "orange":
      console.log(`I like ${fruit}`);
      break;
    default:
      console.log(`I dont like ${fruit}`);
      break;
  }
});

//  Exercise 2
console.log("EXERCISE 2");
function multiply(num1, num2) {
  let result = 0;
  for (let index = 0; index < num1; index++) {
    result = result + num2;
  }
  console.log(
    `The result of multiplying the numbers ${num1} and ${num2} is ${result}`
  );
}

multiply(4, 4);

//  Exercise 3
console.log("EXERCISE 3");

function findLCM(num1, num2) {
  let min = num1 > num2 ? num1 : num2;

  while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
      console.log(
        `The least common multiple of the numbers ${num1} and ${num2} is ${min}`
      );
      break;
    }
    min++;
  }
}

findLCM(9, 6);

//  Advanced Exercise 2
console.log("Advanced Exercise 2");

function findGCD(num1, num2) {
  const firstNum1 = num1;
  const firstNum2 = num2;

  while (num2) {
    var x = num2;
    num2 = num1 % num2;
    num1 = x;
  }
  console.log(
    `The greatest common divisor of the numbers ${firstNum1} and ${firstNum2} is ${num1}`
  );
}

findGCD(16, 12);
