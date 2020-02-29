$(document).ready(function(){
//trivia questions and answers
var triviaQuestions = [
    {
        question: "Who was the girl that Forrest ended up marrying?",
        options: [
            "Jenny", 
            "Erin", 
            "Lynne", 
            "Melinda"
        ],
        correctAnswer: "0"
    },
    {
        question: " Which country did the American ping-pong team travel to?",
        options: [
            "Ireland", 
            "China", 
            "Italy", 
            "New Zealand"
        ],
        correctAnswer: "1"
    },
    {
        question: "What is Forrest's favorite book?",
        options: [
            "The Wizzard of Oz", 
            "Pinnochio", 
            "Beauty and the Beast", 
            "Curious George"
        ],
        correctAnswer: "3"
    }
   
    
    ];
    //define variables
    var timeLeft = 11;
    var wrongAnswers = 0;
    var rightAnswers = 0;
    var questionsLeft = 0;
    var intervalID;
    var indexQA = 0;
    var answered = false;
    var correct;
    // gamePlay functions
    //when button is pressed, startGame beings gamePlay
    function startGame(){
        $(".startButton").remove();
        rightAnswers = 1;
        wrongAnswers = 2;
        questionsLeft = 3;
        $("#question").text(triviaQuestions[0].question);
        $(".answers").html(triviaQuestions[0].options);
        run();
    }
    //runs timer
    function run(){
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    }
    //decreases time by one second
    function decrement(){
        timeLeft--;
        $(".timeLeft").html("<h3> Time Left: " + timeLeft + "</h3>");
        if(timeLeft === 0){
            stop();
            $(".timeLeft").html("<h3>You ran out of time</h3>");
        }
    }
    //stops timer and clears interval
    function stop(){
        clearInterval(intervalID);
    }
    //press button to play
    $(".startButton").on("click", function(){
        startGame();
    });

});