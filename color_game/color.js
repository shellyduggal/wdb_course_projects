var colors = [];
var numSquares = 6;
var pickedColor;
var intro = document.querySelector(".intro");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	//mode button event listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		});
	}
	
	for(var i = 0; i < squares.length; i++) {
		//add clickListeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked
			var clickedColor = this.style.background;
			//compare clicked to goal
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				intro.style.background = clickedColor;
				//change button text
				resetButton.textContent = "Play Again";
			} else {
				this.style.background = "rgb(86, 93, 95)";
				this.style.border = "none";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	reset();

}



function reset() {
		//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
			squares[i].style.border = "2px solid rgba(255,255,255,0.5)";
		}	else {
			squares[i].style.display = "none";
		}
	}
	intro.style.background = "rgb(15, 89, 89)";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function() {
// 	numSquares = 3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor

// 	for(var i=0; i<squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	numSquares = 6;
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");

// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor	

// 	for(var i=0; i<squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = 'block';
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();
})

colorDisplay.textContent = pickedColor;

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match correct color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return array
	return arr;
}


function randomColor(){
	//pick a red
	var r = Math.floor(Math.random() * 256)
	//pick a green
	var g = Math.floor(Math.random() * 256)
	//pick a blue
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}