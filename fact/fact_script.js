function generateFact() {
  // Array of facts
  var facts = [
      "The circulatory system is more than 60,000 miles long",
      "There’s enough gold inside Earth to coat the planet",
      "Armadillo shells are bulletproof (Trust me)",
      "The man with the world’s deepest voice can make sounds humans can’t hear",
      "Thanks to 3D printing, NASA can basically email tools to astronauts",
      "Pineapples grow in the ground not in trees",
      "Cap’n Crunch’s full name is Horatio Magellan Crunch",
      "Abraham Lincoln was a bartender (L)",
      "A waffle iron inspired one of the first pairs of Nikes",
      "The French-language Scrabble World Champion doesn’t speak French",
      "Bananas glow blue under black lights",
      "I know what you did.",
      "A jiffy is an actual unit of time (1/100th of a second)",
      "im in your walls",
      "check your mailbox...",
      "The Easter Island heads have bodies and so do I..."
  ];

  // Generate a random index
  var randomIndex = Math.floor(Math.random() * facts.length);

  // Get the fact at the random index
  var fact = facts[randomIndex];

  // Display the fact on the page
  document.getElementById("fact").textContent = fact;

  // If the fact contains the phrase "The Easter Island heads have bodies and so do I...", display the word "hello" on the screen
  if (fact.includes("The Easter Island heads have bodies and so do I...")) {
      document.getElementById("hello").style.display = "block";
  } else {
      document.getElementById("hello").style.display = "none";
  }
}
