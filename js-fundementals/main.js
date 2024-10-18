console.log("Hello From Sheet");

//=================== Q1===================
function findMaxValue(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

//=================== Q2 ===================
const array = [10, 25, 45, 5, 78, 33];
const maxValue = findMaxValue(array);
console.log("The maximum value is:", maxValue);

let count = 0;
function countOccurrences(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

const arrayElements = [1, 2, 3, 1, 1, 52, 6];
console.log("Count of 1 is " + countOccurrences(arrayElements, 1));

//=================== Q3 ====================
function generateFibonacciSequence(length) {
  if (length <= 0) {
    return "Length should be a positive integer";
  }

  const fibonacci = [0, 1];

  for (let i = 2; i < length; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci.slice(0, length);
}

const length = 10;
const sequence = generateFibonacciSequence(length);
console.log("Fibonacci sequence:", sequence);

//=================== Q4 ===================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = [];

numbers.forEach((number) => {
  if (isEven(number)) {
    const squareObject = {
      number: number,
      square: number * number,
    };

    evenNumbers.push(squareObject);
  }
});

console.log(evenNumbers);
