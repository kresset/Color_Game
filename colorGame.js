var num = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var getColorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i=0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? num = 3: num = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		// add click listener
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			resetButton.textContent = "Play Again!"
			h1.style.backgroundColor = pickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}

function reset (){
	colors=generateRandomColors(num);
	pickedColor=pickColor(colors);
	getColorDisplay.textContent = pickedColor;
	messageDisplay.textContent = ""
	h1.style.backgroundColor = "steelblue"
	resetButton.textContent = "New Colors"
	
	for(var i=0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i]
		}
		else {
			squares[i].style.display = "none"
		}
	}
}

resetButton.addEventListener("click", function(){
	reset();
})

getColorDisplay.textContent = pickedColor;

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(colors) {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}