var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
  {
    question: "What is Kae's last name?",
    answers: {
      a: 'Anderson',
      b: 'Kae',
      c: 'Smith',
      d: 'Nashville'
    },
    correctAnswer: 'a'
  },
  {
    question: "Where did Kae go to college?",
    answers: {
      a: 'University of Tennessee',
      b: 'University of Northern Iowa',
      c: 'Colorado State University',
      d: 'Vanderbilt University'
    },
    correctAnswer: 'b'
  },
  {
    question: "How many countries has Kae been to?",
    answers: {
      a: '1',
      b: '50',
      c: '10',
      d: '16'
    },
    correctAnswer: 'd'
  },
  {
    question: "What year did Kae write HTML for the first time?",
    answers: {
      a: '2002',
      b: '1998',
      c: '2017',
      d: '2010'
    },
    correctAnswer: 'b'
  },
  {
    question: "Where does Kae live?",
    answers: {
      a: 'Iowa',
      b: 'Colorado',
      c: 'Tennessee',
      d: 'Hawaii'
    },
    correctAnswer: 'c'
  }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;
    for (var i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
  }
  showQuestions(questions, quizContainer);



  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
    for(var i = 0; i < questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if(userAnswer === questions[i].correctAnswer) {
        numCorrect++;
      } else {
        answerContainers[i].style.color = 'red';
      }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  }
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
