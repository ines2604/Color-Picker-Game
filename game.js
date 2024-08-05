var noOfSquares = 6;

// Palette
var arr = [];

// Color picked for target
var picked;

// To get all the squares div
var squares = document.getElementsByClassName("square");

// To get the RGB display
var targetColor = document.getElementById("targetColor");

// Message that can be empty, "Try Again", or "Correct"
var message = document.getElementById("message");

// Heading
var head = document.querySelector('h1');

// Reset button
var reset = document.getElementById("newColor");

init();

function init() {
    // Generate random colored palette
    arr = generateRandomColor(noOfSquares);

    // Get target color randomly from the array size
    picked = arr[randomPickedColorIndex()];

    // Updating target RGB display
    targetColor.textContent = picked;

    for (var i = 0; i < squares.length; i++) {
        // Setting square's color one by one to palette color
        squares[i].style.backgroundColor = arr[i];

        // Adding eventListener to all squares
        squares[i].addEventListener("click", function () {
            if (picked === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "green";

                // When correct, set everything to the target color and set newColor to play again
                changeColor(this.style.backgroundColor);

                reset.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again?";
                message.style.color = "red";

                // To hide the wrong square, we will set it to background color
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

// EventListener for reset button
reset.addEventListener("click", resetIn);

function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++) {
        color.push(rgbGenerator());
    }
    return color;
}

// To generate a single RGB color
function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// When correct, change everything to the correct color
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}

// Set things when the player tries to reset
function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    reset.textContent = "New Colors";
    head.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }
}
