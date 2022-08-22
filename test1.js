let firstName = "Mihai";
let lastName = "Blagniceanu"

let fullName = firstName + " " + lastName;
console.log(fullName);

let showName = document.getElementById("name-tag");
showName.textContent = fullName;

function greetings() {
    console.log("Hi there," + " " + fullName + "!" + " " + "How are you today?");
}


greetings();

let points = 0;
let showPoints = document.getElementById("points-tag");

function add3points() {
    points += 3;
    showPoints.textContent = points;
}

function remove1Point() {
    points -= 1;
    showPoints.textContent = points;
}
add3points();
add3points();
add3points();
add3points();
remove1Point();
remove1Point();


function clickError() {
    document.getElementById("error").textContent = "Something went wrong, please try again";
}


// calculator
let num1 = document.getElementById("num1").textContent;
let num2 = document.getElementById("num2").textContent;
let showSum = document.getElementById("results");

function addNums() {
    showSum.textContent = Number(num1) + Number(num2);
}

function substractNums() {
    showSum.textContent = Number(num1) - Number(num2);
}

function multiplyNums() {
    showSum.textContent = Number(num1) * Number(num2);
}

function divideNums() {
    showSum.textContent = Number(num1) / Number(num2);
}

// if else statements
let age = 21;

if (age >= 21) {
    console.log("you can enter");
}else {
    console.log("you can't enter");
}

let age2 = 101;

if (age2 < 100) {
    console.log("Not eligible. You dont have 100 yet");
}else if (age2 === 100) {
    console.log("Congratulations, you have 100!");
}else  {
    console.log("You have already received a card.");
}


// arrays and shit

let info = [
    "My name is Mihai",
    29,
    true
]
let pizza = "I like pizza";
let displayInfo = document.getElementById("array-display");
// displayInfo.textContent = info;
console.log(info[1]);

info.push("GG");
info.push(pizza)
info.pop();
console.log(info);


// for loop
for (let i = 10; i < 101; i+=10) {
    console.log(i);
}


messages = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i]);
}

// i incepe cu 0, pentru ca indicii incep numerotarea de la 0.
// .length numara elementele din array, incepand cu 1.
// => i<messages.length, si nu i<=messages.length, pentru ca, conform numerotarii cu indici
//  avem 5 elemente(0-5), dar conform length, ele sunt 6, pentru ca ia in calcul si
// elementul care are indicele 0. Deci, chiar daca i < length, va afisa TOATE elementele sale,
// pentru ca le numeroteaza diferit, dar le ia in calcul.


let cards = [ 7, 3, 9];

for (let i = 0; i < cards.length; i += 1) {
    console.log(cards[i]);
}

let sentence = ["Hello", "my", "name", "is", "Mihai"] 
let greetingEl = document.getElementById("array-display")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}

// cu += facem a.i. sa ramana tot textul randat, fara sa il inlocuiasca mereu pe cel vechi cu cel nou.

// return values in functions
let player1Time = 102
let player2Time = 107

function returnFastestPlayer() {
    if( player1Time < player2Time) {
        return player1Time;
    } else if(player1Time > player2Time) {
        return player2Time
    }else {
        return player1Time
    }
}

let theFlash = returnFastestPlayer();
console.log("The fastest player is: " + theFlash);

function totalTime() {
    return player1Time + player2Time;
}

let storedTotalTime = totalTime();
console.log(storedTotalTime);


let randomNumber = Math.random() * 6;
console.log(randomNumber);

// math.random() genereaza un nr intre 0-0.99999


let flooredNumber = Math.floor(3.287878)
console.log(flooredNumber);

// indeparteaza zecimalele

let numberrr = Math.floor ( Math.random() * 6);
console.log(numberrr);


// logical operators
let X = true;
let Y = false;

if (X === true && Y === true) {
    
    console.log("Both conditions are fulfilled!");
}else {
    
    console.log("you need both conditions to be true to proceed");
}
// && = and, || = or

if (X === true || Y === true) {
    
    console.log("one of the conditions is fulfilled!");
}else {
    
    console.log("none of the conditions is fulfilled");
}


// objects

let castle = {
    name: "Bran",
    builtYear: 1382,
    isAvailable: true,
    tags: ["castle", "airbnbCastle"]
}

console.log(castle.name, castle.isAvailable, castle.builtYear, castle.tags);