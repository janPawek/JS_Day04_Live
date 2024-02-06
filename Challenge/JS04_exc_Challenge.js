document.addEventListener("DOMContentLoaded", function() {
    promptForPlayerName(1);
    promptForPlayerName(2);
});

function promptForPlayerName(playerNumber) {
    var playerName = prompt("Enter the name for Player " + playerNumber);
    document.getElementById("player" + playerNumber + "Name").innerText = playerName;
}

function rollDice(playerNumber) {
    var result = Math.floor(Math.random() * 6) + 1;
    document.getElementById("player" + playerNumber + "Result").innerText = "Result: " + result;
    checkWinner();
}

function checkWinner() {
    var result1 = parseInt(document.getElementById("player1Result").innerText.split(":")[1]);
    var result2 = parseInt(document.getElementById("player2Result").innerText.split(":")[1]);

    var winnerAnnouncement = document.getElementById("winnerAnnouncement");

    if (result1 > 0 && result2 > 0) {
        if (result1 > result2) {
            winnerAnnouncement.innerText = "Player 1 wins!";
        } else if (result2 > result1) {
            winnerAnnouncement.innerText = "Player 2 wins!";
        } else {
            winnerAnnouncement.innerText = "It's a tie!";
        }
    }
}
