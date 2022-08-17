let firstCard = getRandomCard();
let secondCard = getRandomCard();
let drawnCards = [];
let sum =  0;
let blackjack = false;// in prima faza, playerul nu are blackjack, deci va fi false
let stillInTheGame = false;
let gameMessage = [];
let displayedCards = document.getElementById("your-cards");
let infoMessage = document.getElementById("starting-message");
let displayedSum = document.getElementById("your-sum");
let newCardBtn = document.getElementById("new-card-btn");
let startGameBtn = document.getElementById("start-game-btn");
let playerStats = document.getElementById("player-stats");
// o variabila nu poate fi folosita inainte de a fi definita. js citeste de sus in jos.
// daca folosesti o variabila inainte de a fi definita, va aparea ca undefined.

// function hoisting - inseamna ca functiile pot fi scrise oricand, pentru ca js le "duce"
// sus si le poti folosi chiar si la prima linie. nu toate functiile pot fi hoistuite, ci doar
// cele scrise sub forma clasica. (arrow functions nu pot fi hoistuite- don't know, de cercetat???)

console.log(drawnCards);


// Game rules
function startGame() {
     stillInTheGame = true;
     drawnCards = [firstCard,secondCard]
     sum =  firstCard + secondCard;
    renderGame();
    startGameBtn.disabled = true; 
};
// card randomizer - 
function getRandomCard() {
    let randomGeneratedNumber = Math.floor(Math.random() * 11) + 1; //adaugam +1 ca sa inceapade la 1, nu de la 0
    if (randomGeneratedNumber > 10) {
        return  10;
    }else if ( randomGeneratedNumber === 1) {
        return  11;
    } else  {
        return randomGeneratedNumber;
    }
}
// stabilim logica jocului = daca genereaza un nr > 10=> 10( pt ca in bj, cartile din chita = 10)
//daca genereaza nr 1(adica AS) => ii dam valoarea de 11. Practic, va genera numere cuprinse intre 2-11
// game starter
function renderGame() {
    if (sum < 21) {
        displayedSum.textContent = " Sum: " + sum;
        displayedCards.textContent = "Cards: ";
        for (i = 0; i < drawnCards.length; i++){
            displayedCards.textContent += drawnCards[i] +", ";
        }
        gameMessage = [sum + ". " + "Do you want to draw another card?🧐"];
        infoMessage.textContent = gameMessage;

    } else if (sum === 21) {
        displayedSum.textContent = " Sum: " + sum;
        blackjack = true;//blackjack nu va mai fi false
        gameMessage = [sum + ". " + "Congratulations, you have Blackjack!🥳"];
        displayedCards.textContent = "Cards: " + drawnCards[0] + " " + drawnCards[1];
        infoMessage.textContent = gameMessage;
    } else {
        displayedSum.textContent = " Sum: " + sum;
        stillInTheGame = false;
        gameMessage = [sum + ". " + "Sorry, you lose.🥲"];
        displayedCards.textContent = "Cards: " + drawnCards[0] + " " + drawnCards[1];
        infoMessage.textContent = gameMessage;
    }
}

function newCard() {
    let thirdCard = getRandomCard()
    if (stillInTheGame === true && blackjack === false) {
        sum += thirdCard;
        drawnCards.push(thirdCard);
        renderGame();
    } else if ( stillInTheGame === false && blackjack === false) { 
        newCardBtn.disabled = true;
        console.log("you have lost! can't draw anymore cards");
    } else  {
        newCardBtn.disabled = true;
        console.log("You have blackjack! No need to draw anymore cards");
    }
    console.log(drawnCards);
    displayedCards.textContent = "Cards: " + drawnCards;
}
// Nu mai scriem la ultimul "else" conditia ca sum > 21, pentru ca avem deja conditii pentru
//  sum === 21 si sum < 21, => daca cele doua conditii nu sunt indeplinite, clar sum > 21


let player = {
    playerName: "Mihai",
    playerCash: "200$",
}

playerStats.textContent = player.playerName + ": " + player.playerCash;