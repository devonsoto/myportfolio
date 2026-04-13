const quotes = [
  "Not all those who wander are lost. — J.R.R. Tolkien",
  "The mass of men lead lives of quiet desperation. — Henry David Thoreau",
  "Go to the woods and live deliberately. — Henry David Thoreau",
  "We are all just walking each other home. — Ram Dass",
  "You can't go back and change the beginning, but you can start where you are and change the ending. — C.S. Lewis",
  "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
  "Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day. — Shakespeare",
  "It's supposed to be hard. If it wasn't hard, everyone would do it. — A League of Their Own",
  "Stay hungry, stay foolish. — Steve Jobs",
  "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience. — Eleanor Roosevelt",
];

export const getQuote = (): string => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
