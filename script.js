
// for of - used with arrays
// for(variable of interable){statement}

const numbers = [1, 2, 3, 4, 5]

for (let number4 of numbers) {
	console.log(`${number4} * 10 = ${number4*10}`)
}

// for in - used with objects
// for(variable in object){statement}

const person = {
	Name: 'Zury',
	Age: 68,
	Occupation: 'Developer'
}

for (const property in person) {
	console.log(`${property}: ${person[property]}`)
}

// for
// for(inicialization; condition; update) {code that repeats}

let userInput3 = parseInt(prompt('Enter a number to calculate its multiplication table: '))
for (let i = 1; i <= 10; i++){
	console.log(`${userInput3} * ${i} = ${userInput3 * i}`)
}

const fruits = ['apple', 'grape', 'banana', 'orange', 'mango']
for (let counter3 = 0; counter3 < fruits.length; counter3++){
	console.log(`Fruta ${counter3 + 1}: ${fruits[counter3]}`)
}

for (let counter2; counter2 <= 5; counter2++){
	console.log(counter2)
}

// while

let counter = 1

while (counter <= 5) {
    console.log(counter)

    counter += 1
}

// sort number play

const number = 5
let attempts = 0
let userInput = parseInt(prompt('Enter a number between 1 and 10: '))

while(number !== userInput) {

	if(userInput < 1 || userInput > 10) {
		userInput = parseInt(prompt('Pay attention! The number is not between 1 and 10. Try again: '))
	} else {
		userInput = parseInt(prompt('Try again: '))
	}

	attempts++
}

console.log(`Congrats! You guess the secret number after ${attempts} attempts.`)

// do while

const number2 = 2
let attempts2 = 0
let userInput2

do {
	userInput2 = parseInt(prompt('Enter a number between 1 and 10: '))

	if(userInput2 < 1 || userInput2 > 10) {
		alert('Pay attention! The number is not between 1 and 10.')
	}

	attempts2++
	
} while(userInput2 !== number2)

console.log(`Congrats! You guess the secret number after ${attempts2} attempts.`)
