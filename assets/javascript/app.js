$(document).ready(function(){
    
    var triviaQuestions = [
        {
            question: "Who was the girl that Forrest ended up marrying?",
          options: [
                "Jenny", 
                "Erin", 
                "Lynne", 
                "Melinda"
            ],
            correctAnswer: "0",
        },
        {
            question: " Which country did the American ping-pong team travel to?",
           options: [
                "Ireland", 
                "China", 
                "Italy", 
                "New Zealand"
            ],
            correctAnswer: "1",
        },
        {
            question: "What is Forrest's favorite book?",
     options: [
                "The Wizzard of Oz", 
                "Pinnochio", 
                "Beauty and the Beast", 
                "Curious George"
            ],
            correctAnswer: "3",
        }
               
        ];
      
        var timeLeft = 11;
        var wrongAnswers = 0;
        var rightAnswers = 0;
        var questionsLeft = 0;
        var intervalID;
        var indexQA = 0;
    
     
       
        function startGame(){
            $(".startButton").remove();
            rightAnswers = 0;
            wrongAnswers = 0;
            questionsLeft = 0;
            displayQuestions();
        }
        
        //displays questions and answers in main-cotent
        function displayQuestions(){
            $("#question").html("<h2>" + triviaQuestions[indexQA].question + "</h2>");
            var answerChoices = triviaQuestions[indexQA].options;
            for(var i = 0; i < answerChoices.length; i++){
                var answers = $("<button>").text(answerChoices[i]).attr("data-guessvalue", i).addClass("optionButton");
                $(".answers").append(answers);
            }
            runTimer();
        }
        //gives functionality to each answer button
        $(document).on("click", ".optionButton", function(){
            var correct = triviaQuestions[indexQA].correctAnswer;
            console.log(correct)
            $("#question").empty();
            $(".answers").empty();
            if($(this).attr("data-guessvalue") === correct){
                stopTimer();
                rightAnswers++;
                console.log("Correct answers: " + rightAnswers);
                gameOver();
            } else{
                stopTimer();
                wrongAnswers++;
                console.log("Wrong answers: " + wrongAnswers);
                gameOver();
            }
           
        });
        // checks if triviaQuestions array is complete, executes gamePlay functions
        function gameOver(){
            if(indexQA === triviaQuestions.length - 1){
                if(wrongAnswers){
                    
                    $(".main-content").html(`<h1>You lost!  </h1>`);
                }else{
                    $(".main-content").html("<h1>You won!</h1>");
                }
            }else{
                indexQA++; 
                displayQuestions();
            }
        }

        //runs timer
        function runTimer(){
            clearInterval(intervalID);
            intervalID = setInterval
        }
        //decreases time by one second
        function decrement(){
            timeLeft--;
            $(".timeLeft").html("<h3> Time Left: " + timeLeft + "</h3>");
            if(timeLeft === 0){
                stopTimer();
                $("#question").empty();
                $("#answers").empty();
                $(".timeLeft").html("<h2>You ran out of time!</h2>");
                gameOver();
            }
        }
        //stops timer and clears interval
        function stopTimer(){
            clearInterval(intervalID);
        }
        //press button to play
        $(".startButton").on("click", function(){
            startGame();
        });
    });