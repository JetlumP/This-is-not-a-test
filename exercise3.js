// Exercise 3 - Vending machine

let input = prompt('Add a Number for Exercise 3');
let coins = [50, 20, 10, 5, 1];
let newCoins = [];


function changeCalculator(number){
    for (let coin of coins) {
        let divide = Math.floor(number / coin);
        for (let i = 0; i < divide; i++) {
            newCoins.push(coin);
        }
        number = number % coin;
    }
}
changeCalculator(input)
console.log(newCoins)


