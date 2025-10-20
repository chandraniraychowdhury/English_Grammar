const cards = [
  {
    rule: "Before general, plural, or uncountable nouns",
    table: `
      <tr><td>❌ The cats are friendly animals.</td><td>✅ Cats are friendly animals.</td><td>Talking about cats in general.</td></tr>
      <tr><td>❌ The milk is good for health.</td><td>✅ Milk is good for health.</td><td>Milk is uncountable, used generally.</td></tr>
      <tr><td>❌ The honesty is important.</td><td>✅ Honesty is important.</td><td>Honesty is an abstract noun.</td></tr>
    `,
    explanation: "Don’t use 'the' before nouns when you talk in general, not about a specific instance.",
    exception: "Use 'the' when the noun is specific or previously mentioned (e.g., The milk in the fridge is spoiled)."
  },
  {
    rule: "Before proper nouns (names of people, cities, countries)",
    table: `
      <tr><td>❌ The India is a large country.</td><td>✅ India is a large country.</td><td>Country name, used without 'the'.</td></tr>
      <tr><td>❌ The Shakespeare was a great playwright.</td><td>✅ Shakespeare was a great playwright.</td><td>Person’s name.</td></tr>
    `,
    explanation: "We omit 'the' before most proper nouns.",
    exception: "Use 'the' with plural country names or geographical groups (e.g., the Netherlands, the Philippines, the Himalayas)."
  },
  {
    rule: "Before names of meals, languages, and subjects",
    table: `
      <tr><td>❌ The breakfast was delicious.</td><td>✅ Breakfast was delicious.</td><td>Meals are used without 'the' generally.</td></tr>
      <tr><td>❌ The English is difficult.</td><td>✅ English is difficult.</td><td>Languages don't take 'the'.</td></tr>
    `,
    explanation: "Meals, languages, and subjects are used without 'the' unless specifically defined.",
    exception: "Use 'the' when specific (e.g., The breakfast we had at the hotel was delicious)."
  },
  {
    rule: "With modes of transport after 'by'",
    table: `
      <tr><td>❌ I go to school by the bus.</td><td>✅ I go to school by bus.</td><td>After 'by', we omit 'the'.</td></tr>
    `,
    explanation: "Don’t use 'the' after 'by' with means of transport.",
    exception: "Use 'the' when referring to a specific bus, train, etc. (e.g., I missed the bus to Delhi)."
  },
  {
    rule: "With institutions, places, or activities used for their primary purpose",
    table: `
      <tr><td>❌ She is at the school now.</td><td>✅ She is at school now.</td><td>She is there as a student, primary purpose.</td></tr>
    `,
    explanation: "Omit 'the' when referring to institutions for their main function.",
    exception: "Use 'the' when referring to the building or location itself (e.g., The parents waited at the school)."
  }
];

let current = 0;
const card = document.getElementById("card");

function renderCard() {
  const { rule, table, explanation, exception } = cards[current];
  card.querySelector(".front").innerHTML = `
    <h2>${rule}</h2>
    <table>${table}</table>
    <p><b>✅ Rule:</b> ${explanation}</p>
  `;
  card.querySelector(".back").innerHTML = `
    <h3>Exception:</h3>
    <p>${exception}</p>
  `;
}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {
  current = (current + 1) % cards.length;
  card.classList.remove("flipped");
  renderCard();
}

function prevCard() {
  current = (current - 1 + cards.length) % cards.length;
  card.classList.remove("flipped");
  renderCard();
}

renderCard();
