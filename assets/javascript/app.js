var Questions = {
	q1: ["What is the capital of Finland?", "Helsinki", "Stockholm", "Tallinn"],
	q2: ["Who wrote the song While My Guitar Gently Weeps?", "George Harrison", "Paul McCartney", "John Lennon"],
	q3: ["To what present-day country are bananas native?", "Papua New Guinea", "Nicaragua", "Brazil"]
}

var keySet = [Questions.q1, Questions.q2, Questions.q3];

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
	for (i = 0; i < keySet.length; i++) {
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
	timer = 2;
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
	$("#questionText").text("That's CORRECT!");
	$("#optionButtons").empty();
	$("#optionButtons").text(" ––– nicely done ;)");
	whatQuestion++;
	if (whatQuestion < keySet.length) {
		setTimeout(showNewQuestion, 3000);
	}
	else if (whatQuestion === ketSet.length) {
		showEndGame();
	}
}

function loadAnswerWrongScreen() {
	$("#questionText").text("Sorry, that's incorrect...");
	$("#optionButtons").empty();
	$("#optionButtons").text("The answer was " + keySet[whatQuestion][1] + ".");
	whatQuestion++;
	if (whatQuestion < keySet.length) {
		setTimeout(showNewQuestion, 3000);
	}
	else if (whatQuestion === ketSet.length) {
		showEndGame();
	}}

function loadTimeUpScreen() {
	$("#questionText").text("TIME'S UP!");
	$("#optionButtons").empty();
	$("#optionButtons").text("The answer was " + keySet[whatQuestion][1] + ".");
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
	$("#optionButtons").text("You answered " + totalRightAnswers + " out of " + keySet.length + " questions correctly.");
}

function restartGame() {

}


$(document).ready(function(){
	showNewQuestion();
})

// document.on("click", lsdkf jlsdkjf)
	// if (text == data-answer)

	// if () // answers correctly..
		// clearInterval(theCountdown);
		// loadAnswerRightScreen();
	// else if () //answers incorrectly...
		// clearInterval(theCountdown);
		// loadAnswerWrongScreen();

