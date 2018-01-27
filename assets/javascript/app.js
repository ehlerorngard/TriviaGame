var Questions = {
	q1: ["What is the capital of Finland?", "Helsinki", "Stockholm", "Tallinn"],
	q2: ["Who wrote the song While My Guitar Gently Weeps?", "George Harrison", "Paul McCartney", "John Lennon"],
	q3: ["To what present-day country are bananas native?", "Papua New Guinea", "Nicaragua", "Brazil"]
}

var keySet = [Questions.q1, Questions.q2, Questions.q3];

var totalRightAnswers = 0;
var whatQuestion = 0;
// var thePresentQuestion;
var timer = 10;
var theCountdown;
var answeredCorrectly;
var randomA;

function showNewQuestion() {
	// answeredCorrectly = false;

	$("#questionText").text(keySet[whatQuestion][0]);

	var answerArray = [1, 2, 3];
	var rIndex;
	var choice;
	for (i = 0; i < keySet.length; i++) {
		rIndex = Math.floor(Math.random()*answerArray.length);
		console.log(rIndex);
		randomA = answerArray[rIndex];
		console.log(randomA);
		var btn = $("<button>");
		btn.addClass("buttons");
		btn.attr("data-answer", keySet[whatQuestion][randomA]);
		choice = keySet[whatQuestion][randomA];
		console.log(keySet[whatQuestion][3]);
		btn.text(choice);
		answerArray.splice(rIndex, 1);
		$("#optionButtons").append(btn);
	}
	timer = 10;
	theCountdown = setInterval(decrement, 1000);


	// if () // answers correctly..
		// clearInterval(theCountdown);
	// else if () //answers incorrectly...
// 
		// else if (timer === 0)

}

function decrement() {
	timer--;
	$("#timerReadout").text(timer);
	if (timer === 0) {
		clearInterval(theCountdown);
		loadAnswerWrongScreen;
	}
}

function loadAnswerRightScreen() {
	whatQuestion++;
	setTimeout(showNewQuestion, 2000);
	if (count === images.length) {
    		count = 0;
  	}
}

function loadAnswerWrongScreen() {

}

function loadTimeUpScreen() {

}

function showEndGame() {

}

function restartGame() {

}


$(document).ready(function(){
	showNewQuestion();
})

// document.on("click", lsdkf jlsdkjf)
	// if (text == data-answer)

