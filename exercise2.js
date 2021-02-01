// Exercise 2 - Divide by 7 and 3

let num = prompt('BONUS: Add Number for Exercise 2');

function buildArray(num){
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i)
    }
    return array;
}

let e2array = buildArray(num);

function getNumbers(array) {
    let newArray = [];
    for (let number of array) {
        if (number % 7 === 0 && number % 3 === 0) {
            newArray.push(number)
        }
    }
  return newArray;
}

console.log(getNumbers(e2array));