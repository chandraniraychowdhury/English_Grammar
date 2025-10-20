const flashcards = [
  { front: "When do we omit 'the' before general nouns?", back: "We omit 'the' before general, plural, or uncountable nouns (e.g., Cats are friendly animals)." },
  { front: "Before which proper nouns do we omit 'the'?", back: "Before names of countries, cities, people (e.g., India, Shakespeare)." },
  { front: "When not to use 'the' before meals?", back: "Don’t use 'the' before meals unless specified (e.g., Breakfast was delicious)." },
  { front: "When not to use 'the' with transport?", back: "Don’t use 'the' after 'by' (e.g., by bus, by train)." },
  { front: "When not to use 'the' with languages or subjects?", back: "We say 'I like English' or 'I study mathematics' (no 'the')." },
];

let current = 0;
let flipped = false;
const card = document.getElementById("flashcard");

function showCard() {
  card.textContent = flipped ? flashcards[current].back : flashcards[current].front;
}
card.addEventListener("click", () => {
  flipped = !flipped;
  showCard();
});
function nextCard() {
  current = (current + 1) % flashcards.length;
  flipped = false;
  showCard();
}
showCard();
