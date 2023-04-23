const questions = [
    {
      question: "What is the capital of India? (Clue: It is home of Red Fort.)",
      answer: "Delhi",
      
    },
    {
      question: "What is the largest country in the world by land area? (clue: expands in two continents)",
      answer: "Russia",
    },
    {
      question: "What is the currency of Japan?",
      answer: "Yen",
    },
    
    {
      question: "Which planet is known as the Red Planet? (Clue: one of the neighbour of earth",
      answer: "Mars",
    },
    {
      question: "What is the capital of Uttar Pradesh?",
      answer: "Lucknow",
    },
    {
      question: "Which city in India is known as the Pink City?(Clue: Located in Rajasthan",
      answer: "Jaipur",
    },
    {
      question: "In what year did India gain independence from British rule? (Clue : an year near 1950) ",
      answer: "1947",
    },
  ];
  
  const questionContainer = document.querySelector(".question-container");
  const questionElement = document.querySelector("#question");
  const answerElement = document.querySelector("#answer");
  const submitButton = document.querySelector("#submit-btn");
  const nextButton = document.querySelector("#next-btn");
  const resultElement = document.querySelector("#result");
  const deadEndContainer = document.querySelector("#dead-end-container");
  
  let currentQuestionIndex = 0;
  let numWrongAnswers = 0;
  
  function displayQuestion() {
    questionElement.innerText = questions[currentQuestionIndex].question;
  }
  
  function checkAnswer() {
    const userAnswer = answerElement.value;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      resultElement.innerText = "Correct!";
      resultElement.style.color = "green";
      submitButton.style.display = "none";
      nextButton.style.display = "block";
      numWrongAnswers = 0;
    } else {
      resultElement.innerText = "Incorrect. Please try again.";
      resultElement.style.color = "red";
      numWrongAnswers++;
      if (numWrongAnswers === 3) {
        deadEndContainer.style.display = "block";
        questionContainer.style.display = "none";
        alert("Dead end! You have exhausted your attempts.");
      }
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      answerElement.value = "";
      resultElement.innerText = "";
      submitButton.style.display = "block";
      nextButton.style.display = "none";
    } else {
      questionContainer.style.display = "none";
      const message = document.createElement("p");
      message.innerText = "Congratulations! You won the match.";
      message.style.color = "green";
      questionContainer.parentNode.appendChild(message);
    }
  }
  
  displayQuestion();
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkAnswer();
  });
  
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    nextQuestion();
  });
  