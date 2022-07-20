let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess")
    } else {
        guess = prompt('Too low! Enter a new guess')
    }
}
console.log(`It took you ${attempts} attempts to get it right. The correct number was ${guess}`)

// Testing the commit

// Testing Branch