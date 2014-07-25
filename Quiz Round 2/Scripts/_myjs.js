var questions = ["Which of the following drugs are best at keeping you awake at camp?", "What topic is most discussed at camp?", "What school did our instructor earn a bachelors in Philosophy from?", "What is the recommended amount of sleep for a coder each night?", "Apple recently acquired Beats music for a reported____dollars"];

//var question1_answers = ["Cocaine", "Coffee", "Sleep", "Epinephrine", "No-Doze"];

//var question2_answers = ["Graduation", "Pizza", "The existence of spoons", "Home-work", "Confusion"];

//var question3_answers = ["The University of Houston", "Hogwarts School of Witchcraft and Wizardry", "Sam Houston University", "Grambling State University", "Southern Methodist University"];

//var question4_answers = ["9-11 hours", "8-7 hours", "5-6 hours", "1-2 hours", "sleep is not defined"];

//var question5_answers = [".5", "1", "29", "3", "10"];

var score = [];

//var displayScore = function () {
//    "use strict";
//    if (document.getElementById("radio5-q5").checked) {
//        alert("Nice!!!");
//        score[4] = 1;
//    }
//    else {
//        alert("No sir!");
//        score[4] = 0;
//    }
//    var total = 0;
//    for (var i in score) {
//        total = total + score[i];
//    }
//    var beginTestDiv = document.getElementById("historyTest");
//    beginTestDiv.innerHTML = "Wasn't that hard was it? Good job! You made it to the end. At least you answered " + total + " out of 5 questions right." + "<br />" + "<br />" + "<input type='button' value='See answers' onClick='showAnswers()' />";
//};

//var fifthQuestion = function () {
//    "use strict";
//    if (document.getElementById("radio3-q4").checked) {
//        alert("Good Job!");
//        score[3] = 1;
//    }
//    else {
//        alert("Yes yes you got it wrong! Sorry");
//        score[3] = 0;
//    }
//    var beginTestDiv = document.getElementById("historyTest");
//    beginTestDiv.innerHTML = questions[4] + "<br />" + "<input type='radio'  name='radioButton' id='radio1-q5'/>" + question5_answers[0] + "<br />" + "<input type='radio'  name='radioButton' id='radio2-q5'/>" + question5_answers[1] + "<br />" + "<input type='radio'  name='radioButton' id='radio3-q5'/>" + question5_answers[2] + "<br />" + "<input type='radio'  name='radioButton' id='radio4-q5'/>" + question5_answers[3] + "<br />" + "<input type='radio'  name='radioButton' id='radio5-q5'/>" + question5_answers[4] + "<br />" + "<input type='button'  value='Next Question' onClick='displayScore()' />";
//};

//var forthQuestion = function () {
//    "use strict";
//    if (document.getElementById("radio3-q3").checked) {
//        alert("Nope......... oh wait yea you got it.....");
//        score[2] = 1;
//    }
//    else {
//        alert("Nah");
//        score[2] = 0;
//    }
//    var beginTestDiv = document.getElementById("historyTest");
//    beginTestDiv.innerHTML = questions[3] + "<br />" + "<input type='radio'  name='radioButton' id='radio1-q4'/>" + question4_answers[0] + "<br />" + "<input type='radio'  name='radioButton' id='radio2-q4'/>" + question4_answers[1] + "<br />" + "<input type='radio'  name='radioButton' id='radio3-q4'/>" + question4_answers[2] + "<br />" + "<input type='radio'  name='radioButton' id='radio4-q4'/>" + question4_answers[3] + "<br />" + "<input type='radio'  name='radioButton' id='radio5-q4'/>" + question4_answers[4] + "<br />" + "<input type='button'  value='Next Question' onClick='fifthQuestion()' />";
//};

//var thirdQuestion = function () {
//    "use strict";
//    if (document.getElementById("radio2-q2").checked) {
//        alert("Lucky");
//        score[1] = 1;
//    }
//    else {
//        alert("Your answer is wrong as all day");
//        score[1] = 0;
//    }
//    var beginTestDiv = document.getElementById("historyTest");
//    beginTestDiv.innerHTML = questions[2] + "<br />" + "<input type='radio'  name='radioButton' id='radio1-q3'/>" + question3_answers[0] + "<br />" + "<input type='radio'  name='radioButton' id='radio2-q3'/>" + question3_answers[1] + "<br />" + "<input type='radio'  name='radioButton' id='radio3-q3'/>" + question3_answers[2] + "<br />" + "<input type='radio'  name='radioButton' id='radio4-q3'/>" + question3_answers[3] + "<br />" + "<input type='radio'  name='radioButton' id='radio5-q3'/>" + question3_answers[4] + "<br />" + "<input type='button'  value='Next Question' onClick='forthQuestion()' />";
//};

//var secondQuestion = function () {
//    "use strict";
//    if (document.getElementById("radio2-q1").checked) {
//        alert("All you do is win");
//        score[0] = 1;
//    }
//    else {
//        alert("What made you pick that? Try again");
//        score[0] = 0;
//    }
//    var beginTestDiv = document.getElementById("historyTest");
//    beginTestDiv.innerHTML = questions[1] + "<br />" + "<input type='radio'  name='radioButton' id='radio1-q2'/>" + question2_answers[0] + "<br />" + "<input type='radio'  name='radioButton' id='radio2-q2'/>" + question2_answers[1] + "<br />" + "<input type='radio'  name='radioButton' id='radio3-q2'/>" + question2_answers[2] + "<br />" + "<input type='radio'  name='radioButton' id='radio4-q2'/>" + question2_answers[3] + "<br />" + "<input type='radio'  name='radioButton' id='radio5-q2'/>" + question2_answers[4] + "<br />" + "<input type='button'  value='Next Question' onClick='thirdQuestion()' />";
//};

//var firstQuestion = function () {
//    "use strict";
//    var beginTestDiv = document.getElementById("historyTest");
//    beginTestDiv.innerHTML = questions[0] + "<br />" + "<input type='radio'  name='radioButton' id='radio1-q1'/>" + question1_answers[0] + "<br />" + "<input type='radio'  name='radioButton' id='radio2-q1'/>" + question1_answers[1] + "<br />" + "<input type='radio'  name='radioButton' id='radio3-q1'/>" + question1_answers[2] + "<br />" + "<input type='radio'  name='radioButton' id='radio4-q1'/>" + question1_answers[3] + "<br />" + "<input type='radio'  name='radioButton' id='radio5-q1'/>" + question1_answers[4] + "<br />" + "<input type='button'  value='Next Question' onClick='secondQuestion()' />";
//};

var next = function () {


};
var outputToDiv = function () {
    "use strict"
    var valueToAdd = document.getElementById("first-question").innerHTML;
   
    var newHtml = "";
    for (var i in myArray) {
        "use strict"
        newHtml += myArray[i] + '<br>';
    }
    document.getElementById("first-question").innerHTML = newHtml;
    document.getElementById("first-question").value = "";
};
