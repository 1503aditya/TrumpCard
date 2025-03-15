// Define suits and ranks
const suits = ["clubs", "diamonds", "hearts", "spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

// Messages to cycle through
const messages = [
    "You got: {card}",
    "Oye hoye! Lucky card: {card}",
    "Arey Wah! Dekho toh kaun aya! {card}"
    
];

let clickCount = 0; // Track button clicks

// Function to select a random card
function selectCard() {
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const cardName = `${randomRank}_of_${randomSuit}.png`; // Example: "ace_of_spades.png"

    // Cycle through messages (reset after 3 clicks)
    clickCount = (clickCount + 1) % 3;
    let message = messages[clickCount].replace("{card}", `${randomRank} of ${randomSuit}`);

    // Show the card image with animation
    document.getElementById("cardImages").innerHTML = `
        <img src="${cardName}" alt="${randomRank} of ${randomSuit}" class="fade-in">
    `;

    // Show text after a slight delay
    setTimeout(() => {
        document.getElementById("cardResult").innerText = message;
    }, 500);
}
