var answers = [];

var question = function (questionText, answer) {
    this.questionText = questionText;
    this.answer = answer;
};

var questions = [];
questions.push(new question("How many states are in the U.S.?", 50));
questions.push(new question("How many stars on the flag?",50));
questions.push(new question("How many stripes?",13));


var currentQuestion = 0;
var userAnswer = false;
var score = 0;
var nextQuestion = function () {
    if (questions[currentQuestion].answer === userAnswer) {
        alert("Good Job American!!!");
        
        score++;

    
    } else {
        alert("Nice try. Try Again!")
    };
    
    currentQuestion++;

    if (currentQuestion === questions.length) {
       alert(score);
        };
};
function getAnswers() {
    answers.push(document.getElementById("first-question").value);
   answers.push(document.getElementById("second-question").value);
   answers.push(document.getElementById("third-question").value);
   (document.getElementById("first-question").value) = "";
   (document.getElementById("second-question").value) = "";
   (document.getElementById("third-question").value) = "";



};
for (var i in questions) {
    addQuestion(questions[i], i);
}

var add = addQuestion(questions[0]);

var answerTrue = function () {
    userAnswer = true;
    nextQuestion();

};
var answerFalse = function () {
    userAnswer = false;
    nextQuestion();
};
var begin = function () {
    document.getElementById("first-question").innerHTML;
};
var hidden = false;



var progressBar = function () {

    var percentage = parseInt(100 * currentQuestion / questions.length);
document.getElementById("green").setAttribute("style", "width: "+ percentage + "%");
    document.getElementById("yellow").setAttribute("style", "width: " + percentage + "%");
    document.getElementById("red").setAttribute("style", "width: " + percentage + "%");
    document.getElementById("blue").setAttribute("style", "width: " + percentage + "%");

};

var timer = questions.length;
var userAnswer = false;


timer();
progressBar();










function runModal() {
    $('#modal-container-377013').modal();

};
runModal();





//var goodAmerican = "You got them all right Captian America!!!";
//function results() {
    
//    if (answers[i] = ["50", "13"]) {
//        var goodAmerican = document.getElementById("modal-dialog").value = document.getElementById("modal-dialog").innerHTML;
//      };  
    
//    };
