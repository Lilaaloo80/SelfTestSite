// check if cookie exists
if (document.cookie.indexOf("guitarTestResult") >= 0)
{
    // cookie exists, hide the form
    document.getElementById("quiz-container").style.display = "none";
  }
  
  
      function showQuestion(questionId)
      {
          // Hide the current question
          var currentQuestion = document.querySelector('.question.active');
          currentQuestion.classList.remove('active');
  
          // Show the next question
          var nextQuestion = document.getElementById(questionId);
          nextQuestion.classList.add('active');
      }
      function previousQuestion()
      {
          // Hide the current question
          var currentQuestion = document.querySelector('.question.active');
          currentQuestion.classList.remove('active');
  
          // Show the previous question
          var previousQuestion = currentQuestion.previousElementSibling;
          previousQuestion.classList.add('active');
      }