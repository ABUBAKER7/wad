var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
        question : "founder of google ",
        choices : [ "select",
            "Larry Page and Sergey Brin",
            "Larry Page",
            "Sergey Brin",
        "None of above"],
        correctAnswer : 1
    }
    ,{
        question : "html stands for ",
        choices : [ "select",
            "Hyper Text Language",
            "Hper TExt Language",
             "Hyper Text Markup Language",
        "None of above"],
        correctAnswer : 3
    },
    {
        question : "Using _______ statement is how you test for a specific condition",
        choices : [ "select",
            "if",
            "for",
            "none of the above"],
        correctAnswer : 1
    }

    ];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
    displayCurrentQuestion();
    if(currentQuestion>=4){
        displayScore();
    }
    if(document.getElementById("next-btn")) {
        if(currentQuestion==5)
        {
            document.getElementById("result").innerText="your score is  =" + correctAnswers;

            document.getElementById("quiz-message").innerText="play again  =";

        }
        currentQuestion++;
        displayCurrentQuestion();
    }

}

function displayCurrentQuestion() {
    /*Write your code here */
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("choice-list").innerHTML="";
    for (var a = 0; a < 4; a++)
    {
        document.getElementById("choice-list").innerHTML += '<li><input type="radio" name="q">'+questions[currentQuestion].choices[a]+'</li>';

    }
    if(document.querySelector("input[name='q']:checked")==null)
    {

    }
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}