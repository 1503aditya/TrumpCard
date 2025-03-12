// Define suits and ranks
const suits = ["clubs", "diamonds", "hearts", "spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

// Function to select a random card
function selectCard() {
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const cardName = `${randomRank}_of_${randomSuit}.png`; // e.g., "ace_of_spades.png"

    // Update text result
    document.getElementById("cardResult").innerText = `Le re Lund ke`;

    // Update image display
    document.getElementById("cardImages").innerHTML = `<img src="${cardName}" alt="${randomRank} of ${randomSuit}" style="width:150px;">`;
}
