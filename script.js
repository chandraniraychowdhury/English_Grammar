const flashcards = [
  {
    title: "1️⃣ Before general, plural, or uncountable nouns",
    examples: [
      { incorrect: "The cats are friendly animals.", correct: "Cats are friendly animals.", explanation: "Talking about cats in general, not specific cats." },
      { incorrect: "The milk is good for health.", correct: "Milk is good for health.", explanation: "Milk = uncountable, general sense." },
      { incorrect: "The honesty is important.", correct: "Honesty is important.", explanation: "Honesty = abstract idea." }
    ],
    rule: "✅ Rule: Don’t use 'the' before nouns when you speak generally, not about a specific instance.",
    exception: "⚠️ Exception: Use 'the' with plural countries, groups of islands, mountains, and rivers — e.g., the Netherlands, the Himalayas, the Nile."
  },

  {
    title: "2️⃣ Before proper nouns (most countries, cities, names, people)",
    examples: [
      { incorrect: "The India is a big country.", correct: "India is a big country.", explanation: "" },
      { incorrect: "The Mount Everest is high.", correct: "Mount Everest is high.", explanation: "" },
      { incorrect: "The Shakespeare wrote plays.", correct: "Shakespeare wrote plays.", explanation: "" }
    ],
    rule: "✅ Rule: Don’t use 'the' with most proper nouns — countries, cities, names of people, or individual mountains.",
    exception: "⚠️ Exception: Use 'the' with country names in plural or descriptive form (the United States, the Netherlands), mountain ranges (the Himalayas), and oceans/rivers (the Pacific Ocean, the Ganga)."
  },

  {
    title: "3️⃣ Before languages and academic subjects",
    examples: [
      { incorrect: "The English is difficult.", correct: "English is difficult.", explanation: "Language names are used without 'the'." },
      { incorrect: "The mathematics is interesting.", correct: "Mathematics is interesting.", explanation: "Academic subjects don’t take 'the'." }
    ],
    rule: "✅ Rule: Don’t use 'the' before languages or academic subjects.",
    exception: "⚠️ Exception: Use 'the' when specifying a branch or form — e.g., the English spoken in Canada, the mathematics of chaos theory."
  },

  {
    title: "4️⃣ Before meals, days, months, holidays",
    examples: [
      { incorrect: "The breakfast was delicious.", correct: "Breakfast was delicious.", explanation: "Meals are used generally without 'the'." },
      { incorrect: "I will meet you on the Monday.", correct: "I will meet you on Monday.", explanation: "Days and months don’t take 'the'." },
      { incorrect: "The Christmas is my favorite holiday.", correct: "Christmas is my favorite holiday.", explanation: "Holidays are used without 'the'." }
    ],
    rule: "✅ Rule: Don’t use 'the' before meals, days, months, or holidays when speaking generally.",
    exception: "⚠️ Exception: Use 'the' only when specifying — e.g., the breakfast we had at the hotel, the Monday after Diwali."
  },

  {
    title: "5️⃣ Before possessive nouns or adjectives",
    examples: [
      { incorrect: "The my car is outside.", correct: "My car is outside.", explanation: "" },
      { incorrect: "The John’s book is on the table.", correct: "John’s book is on the table.", explanation: "" }
    ],
    rule: "✅ Rule: Don’t use 'the' before possessive adjectives or possessive nouns.",
    exception: "⚠️ Exception: None. The article and possessive cannot coexist before the same noun."
  },

  {
    title: "6️⃣ Before names of games, sports, and academic subjects",
    examples: [
      { incorrect: "He plays the football every evening.", correct: "He plays football every evening.", explanation: "" },
      { incorrect: "I like the chemistry.", correct: "I like chemistry.", explanation: "" }
    ],
    rule: "✅ Rule: Don’t use 'the' before the names of sports or academic subjects.",
    exception: "⚠️ Exception: None, unless specifying a particular type, e.g., the football of the 1980s."
  },

  {
    title: "7️⃣ Before transport + by",
    examples: [
      { incorrect: "I go to school by the bus.", correct: "I go to school by bus.", explanation: "" },
      { incorrect: "She came by the train.", correct: "She came by train.", explanation: "" }
    ],
    rule: "✅ Rule: Don’t use 'the' after 'by' when talking about transport in general.",
    exception: "⚠️ Exception: Use 'the' when referring to a specific vehicle or route — e.g., I took the bus that stops near my house."
  },

  {
    title: "🏁 Summary Chart",
    examples: [
      { incorrect: "Use 'the' → Specific things: the book on the table", correct: "Do NOT use 'the' → Things in general: Books are useful", explanation: "" },
      { incorrect: "Unique objects: the sun, the moon", correct: "Proper names: India, Mount Everest", explanation: "" },
      { incorrect: "Superlatives: the best student", correct: "Languages, meals, days, sports: English, breakfast, Monday, football", explanation: "" }
    ],
    rule: "✅ Quick Recap: 'The' = specific, known, or unique nouns. No 'the' = general or abstract ideas.",
    exception: "✨ Keep practicing! Understanding context is key to mastering article usage."
  }
];

let current = 0;

function loadFlashcard(i) {
  const card = flashcards[i];
  document.getElementById("ruleTitle").innerText = card.title;

  const tbody = document.getElementById("examples");
  tbody.innerHTML = card.examples
    .map(ex => `
      <tr>
        <td>${ex.incorrect}</td>
        <td>${ex.correct}</td>
        <td>${ex.explanation}</td>
      </tr>
    `)
    .join("");

  document.getElementById("ruleText").innerText = card.rule;
  document.getElementById("exceptionText").innerText = card.exception;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + flashcards.length) % flashcards.length;
  loadFlashcard(current);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % flashcards.length;
  loadFlashcard(current);
});

loadFlashcard(current);
