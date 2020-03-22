
const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];
cardsInPlay.push("queen");
cardsInPlay.push("king");

const cardOne = cards[0];
const cardTwo = cards[2];

console.log("User flipped " + cardOne); 
console.log("User flipped " + cardTwo); 

if (cardsInPlay.length === 2);
	else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
	else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry,try again.");
}