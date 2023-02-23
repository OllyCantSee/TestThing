function generateQuestion() {
    // Array of questions
    var questions = [
      "What is your favourite color?",
      "What is your favourite food?",
      "What is your favourite book?",
      "What is your favourite film?",
      "What is your favourite TV Show?",
      "What is your favourite hobby?",
      "What is your favourite animal?",
      "What is your favourite videogame?",
      "What is your favourite song or band?",
      "What is your favourite country?",
      "What is the best ice cream flavour?",
      "What is your dream holiday?",
      "What is your dream job?",
      "What is your dream holiday?",
      "If you could know another language, what would it be?",
      
      "What superpower would you have?"
    ];
  
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * questions.length);
  
    // Get the question at the random index
    var question = questions[randomIndex];
  
    // Display the question on the page
    document.getElementById("question").textContent = question;
  }