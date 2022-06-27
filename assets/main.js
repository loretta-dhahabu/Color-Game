// var diffEls = document.querySelectorAll(".diff__btn");
// var diffEl = document.querySelector(".diff__btn.active").innerHTML;
// var n = diffEl;
// var colorsEl = document.querySelector(".colors");
// var colorsBlocks;
// var rgbEl = document.querySelector(".rgb");
// var statusEl = document.querySelector(".status");
// var colors = [];
// createBlocks(n);
// resetGame();

// function checkColors(e) {
//   // your code here
// }

// function resetGame() {
//   createBlocks(n);
//   document.body.style.color = "black";
//   colors = [];
//   pickColors();
//   pickedColor = random(n);
//   rgbEl.innerHTML = colors[pickedColor];
//   setColors();
//   statusEl.innerHTML =
//     "Try to guess the right color based on the RGB value by clicking on the blocks.";
// }

// function setColors() {
//   for (var i = 0; i < colorsBlocks.length; i++) {
//     colorsBlocks[i].style.backgroundColor = colors[i];
//   }
// }

// function pickColors() {
//   for (var i = 0; i < n; i++) {
//     colors.push(randomColor());
//   }
// }

// function randomColor() {
//   return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
// }

// function random(r) {
//   return Math.floor(Math.random() * r);
// }

// function setNumberOfTiles(e) {
//   // your code here
// }

// function createBlocks(num) {
//   colorsEl.innerHTML = "";

//   // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
//   for (var i = 0; i < num; i++) {
//     var block = document.createElement("div");
//     block.classList.add("colors__block");
//     colorsEl.appendChild(block);
//   }
//   colorsBlocks = document.querySelectorAll(".colors__block");
//   for (var i = 0; i < colorsBlocks.length; i++) {
//     colorsBlocks[i].addEventListener("click", checkColors);
//   }
// }

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");

easyBtn.addEventListener("click", function () {
  //highlight button to show selected
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  //set number of squares to 3
  numSquares = 3;
  //change colors to 3
  colors = generateRandomColors(numSquares);
  //reset winning color
  pickedColor = randomColorG();
  //change display to show new picked color
  colorDisplay.textContent = pickedColor;
  //loop through 3 squares and reset colors while displaying none for squares without new reset colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = randomColorG();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  //set winning color highlight back to default
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(colorz) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = colorz;
  }
}

function randomColorG() {
  //pick a random number
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(genColor) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < genColor; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
