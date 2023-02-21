// Övningar kommer från slides i "Grundläggande javascript"
// 0. Object and Arrays (slide 9)

const snobben = {
  name: "Snobben",
  age: 12,
  gender: "male",
  alive: true
}

const mallorcaFlight = {
  departure: "Gothenburg",
  destination: "Mallorca",
  departureDate: new Date(2023, 2, 28, 12, 10, 12),
  destinationDate: new Date(2023, 2, 28, 17, 0, 0)
}

const gothenburgFlight = {
  departure: "Mallorca",
  destination: "Gotheburg",
  departureDate: new Date(2023, 3, 7, 12, 10, 12),
  destinationDate: new Date(2023, 3, 7, 17, 0, 0)
}

const vacationInfo = {
  person: snobben,
  departureFlight: mallorcaFlight,
  homeFlight: gothenburgFlight,
  hotel: "Las Palmas",
  days: 7
}

// 1. ändra snobbens ålder till 13 

//console.log(vacationInfo.person)
vacationInfo.person.age = 13
//console.log(vacationInfo.person)


// 2. immutability (pure functions)

// string, number, boolean
const test = (number) => {
  number = 12;
  //console.log(secret)
  return number;
}

let secret = 11;
test(secret); // dör
// console.log(secret); // nothing changed


// obj, arr
const test2 = (obj) => {
  obj.name = "dirty"
  return obj;
}

const person = { name: "Lars" }
test2(person);
// console.log(person); // something changed


// 3. Functions (slide 11)
const calculate = () => {
  const a = Number(prompt("Ange första tal"));
  const op = prompt("Ange operator");
  const b = Number(prompt("Ange andra tal"));
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      throw Error("Not supported operator " + op);
      break;
  }
}

//const result = calculate();
// console.log(result);

// 4. Function and Objects (slide 17)
const printInitials = (fullName) => { // " Pelle svanslös     "
  fullName = fullName.trim(); // "Pelle svanslös"
  const names = fullName.split(" "); // ["Pelle", "svanslös"]
  return (names[0][0].toUpperCase()) + (names[1][0].toUpperCase()) // "PS"
}

// console.log(printInitials(" pelle svanslös   "));

// 5. Function and Objects (slide 18)
const countCharacters = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg.length;
  }
  return sum;
}

// console.log(countCharacters("hej", "hur", "mår", "du?")) // 12

// 6. Function and Objects (slide 19)
const sum = ([a, b, c, d]) => {
  return a + b + c + d
}
// console.log(sum([1, 2, 3, 4])) // 10

// 7. Higher-order Functions (slide 9)
const repeat = (n, action) => {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// repeat(5, console.log);
// repeat(5, i => console.log(i + 1));

// 8. Higher-order Functions (slide 11)
const greaterThan = n => x => x > n;

const greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// 9. Higher-order Functions (slide 14)
const filter = (arr, pred) => {
  const result = [];
  for (let elem of arr) {
    if (pred(elem)) {
      result.push(elem);
    }
  }
  return result;
}

// console.log(filter([1, 2, 3, 4, 5, 6], nr => nr % 2 === 0))

const map = (arr, func) => {
  const result = [];
  for (let elem of arr) {
    result.push(func(elem))
  }
  return result;
}

// console.log(map([1, 2, 3, 4, 5, 6], nr => nr * 10))


// 10. Closure and Recursion (slide 18)

// Steg 1
const printFarmInventory1 = (cows, chickens) => { // 7, 11
  let cowString = String(cows); // "7"
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} chickens`);
}

// Steg 2
const padZeros = (animals) => {
  let animalString = String(animals); // "7"
  while (animalString.length < 3) {
    animalString = "0" + animalString;
  }
  return animalString;
}

const printFarmInventory2 = (cows, chickens, pigs) => {
  console.log(`${padZeros(cows)} cows`);
  console.log(`${padZeros(chickens)} chickens`);
  console.log(`${padZeros(pigs)} pigs`);
}

// Steg 3
const padZeros2 = (animals, nr) => {
  let animalString = String(animals); // "7"
  while (animalString.length < nr) {
    animalString = "0" + animalString;
  }
  return animalString;
}

const printFarmInventory3 = (cows, chickens, pigs) => {
  console.log(`${padZeros(cows, 3)} cows`);
  console.log(`${padZeros(chickens, 4)} chickens`);
  console.log(`${padZeros(pigs, 5)} pigs`);
}

// 11. Closure and Recursion (slide 23)
const hoppsan = "hej";
const guessingGame = (amountOfGuesses, secret) => {
  let amount = 1;
  return (guess) => {
    if (amount > amountOfGuesses) {
      console.log(hoppsan);
      console.log("Game over");
    } else {
      if (guess > secret) {
        console.log("Too high");
      } else if (guess < secret) {
        console.log("Too low");
      } else {
        console.log("Just right");
      }
      amount++;
    }
  }
}

/*
const game1 = guessingGame(3, 7);
game1(1); // Too low
game1(9); // Too high
game1(8); // Too high
game1(4); // Game over

const game2 = guessingGame(5, 7);
game2(1); // Too low
game2(8); // Too high
game2(7); // Just right
*/

// 12. Hur man binder this
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function () {
    console.log('hello, my name is ' + this.name)
  },
}

name = "Jöns"
setTimeout(arto.greet.bind(arto), 2000);

//arto.greet();
