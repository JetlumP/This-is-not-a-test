// Exercise 1 - Map numbers to string with dash

let e1Array = [0, 2, 5, 4, 6, 8];
let string = `${e1Array[0]}`;

function mapToEvenNumbersWithDash(array) {
    for(let x=1; x<array.length; x++){
        if((array[x-1]%2 === 0)&&(array[x]%2 === 0)){
        string += '-' + array[x];
        } else {
        string += array[x];
        }
    }
    return string;
}

console.log(mapToEvenNumbersWithDash(e1Array))
