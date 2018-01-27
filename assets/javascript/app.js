var Questions = {
	q1: ["What is the capital of Finland?", "Helsinki", "Stockholm", "Tallinn", "http://wiwibloggs.com/wp-content/uploads/2012/06/Aerial-view-Stockholm-centre.jpg"],
	q2: ["Who wrote the song While My Guitar Gently Weeps?", "George Harrison", "Paul McCartney", "John Lennon", "https://media.giphy.com/media/l3vR78OeXsytGmv2U/giphy.gif"],
	q3: ["To what present-day country are bananas native?", "Papua New Guinea", "Nicaragua", "Brazil", "https://media.giphy.com/media/jsYatKVSAD2H6/giphy.gif"],
	q4: ["Who has the men's singles tennis record for most French Open Titles?", "Rafael Nadal", "Bjorn Borg", "Roger Federer", "https://media.giphy.com/media/xUPGcjDmKiWBgqPAFW/giphy.gif"],
	q5: ["Who first created an algorithm to calculate pi (3.14159...)?", "Archimedes", "Pythagoras", "Aristotle", "https://media.giphy.com/media/WJMB7T6K6VKXC/giphy.gif"],
	q6: ["What type of instrument is a hurdy-gurdy?", "string", "woodwind", "keyboard", "https://ugc.kn3.net/i/origin/http://1.bp.blogspot.com/-8d5MeIWvphQ/TbmqnHkJQ2I/AAAAAAAAFaU/YGwGCmDxwZE/s1600/zanfona+01.jpg"]
}

var keySet = [Questions.q1, Questions.q2, Questions.q3, Questions.q4, Questions.q5, Questions.q6];

var totalRightAnswers = 0;
var whatQuestion = 0;
var timer = 10;
var theCountdown;
var randomA;

function showNewQuestion() {
	$("#questionText").text(keySet[whatQuestion][0]);
	$("#optionButtons").empty();
	var answerArray = [1, 2, 3];
	var rIndex;
	var choice;
	for (i = 0; i < 3; i++) {
		rIndex = Math.floor(Math.random()*answerArray.length);
		randomA = answerArray[rIndex];
		var btn = $("<button>");
		btn.addClass("buttons");
		choice = keySet[whatQuestion][randomA];
		btn.attr("data-answer", randomA);
		btn.text(choice);
		answerArray.splice(rIndex, 1);
		$("#optionButtons").append(btn);
	}
	timer = 10;
	$("#timerReadout").text(timer);
	theCountdown = setInterval(decrement, 1000);
}

function decrement() {
	timer--;
	$("#timerReadout").text(timer);
	if (timer === 0) {
		clearInterval(theCountdown);
		loadTimeUpScreen();
	}
}

function loadAnswerRightScreen() {
	totalRightAnswers++;
	console.log("totalRightAnswers: " + totalRightAnswers);
	$("#questionText").text("That's CORRECT!");
	$("#optionButtons").empty();
	var image = $("<img>");
	image.attr("src", keySet[whatQuestion][4]);
	$("#optionButtons").append(image);
	whatQuestion++;
	if (whatQuestion < keySet.length) {
		setTimeout(showNewQuestion, 5000);
	}
	else if (whatQuestion === keySet.length) {
		setTimeout(showEndGame, 3000);
	}
}

function loadAnswerWrongScreen() {
	$("#questionText").text("Sorry, that's incorrect...");
	$("#optionButtons").empty();
	$("#optionButtons").text("The answer was " + keySet[whatQuestion][1] + ".");
	var image = $("<img>");
	image.attr("src", keySet[whatQuestion][4]);
	$("#optionButtons").append(image);
	whatQuestion++;
	if (whatQuestion < keySet.length) {
		setTimeout(showNewQuestion, 3000);
	}
	else if (whatQuestion === keySet.length) {
		setTimeout(showEndGame, 3000);
	}}

function loadTimeUpScreen() {
	$("#questionText").text("TIME'S UP!");
	$("#optionButtons").empty();
	$("#optionButtons").text("The answer was " + keySet[whatQuestion][1] + ".");
	var image = $("<img>");
	image.attr("src", keySet[whatQuestion][4]);
	$("#optionButtons").append(image);
	whatQuestion++;
	if (whatQuestion < keySet.length) {
		setTimeout(showNewQuestion, 3000);
	}
	else if (whatQuestion === keySet.length) {
		setTimeout(showEndGame, 3000);
	}
}

function showEndGame() {
	$("#questionText").text("Well, that's the game!");
	$("#optionButtons").empty();
	var totalWrong = keySet.length-totalRightAnswers;
	$("#optionButtons").text("You answered " + totalRightAnswers + " questions correctly and " + totalWrong + " incorrectly.");
	$("#timerReadout").empty();
	var restartButton = $("<button>")
	restartButton.text("click to play again")
	restartButton.addClass("restartButton");
	$("#optionButtons").append(restartButton);
	$(".restartButton").on("click", function(event){
		restartGame();
	});
}

function restartGame() {
	totalRightAnswers = 0;
	whatQuestion = 0;
	timer = 10;
	randomA = null;
	$("#optionButtons").empty();
	$("#questionText").empty();
	showNewQuestion();
}

function processAGuess(event) {
	var guess = $(this).attr("data-answer");
	console.log(guess);
	if (guess == 1) {
		clearInterval(theCountdown);
		loadAnswerRightScreen()	
	}
	else if (guess !== 1) {
		clearInterval(theCountdown);
		loadAnswerWrongScreen();
	}
}

$(document).on("click", ".buttons", processAGuess);

$(document).ready(function(){
	showNewQuestion();
});