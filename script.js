const flashcards = [
  {
    title: "1️⃣ Before general, plural, or uncountable nouns",
    examples: [
      {
        incorrect: "The cats are friendly animals.",
        correct: "Cats are friendly animals.",
        explanation: "Talking about cats in general, not specific cats."
      },
      {
        incorrect: "The milk is good for health.",
        correct: "Milk is good for health.",
        explanation: "Milk = uncountable, general sense."
      },
      {
        incorrect: "The honesty is important.",
        correct: "Honesty is important.",
        explanation: "Honesty = abstract idea."
      }
    ],
    rule: "✅ Rule: Don’t use 'the' before nouns when you speak generally, not about a specific instance.",
    exception: "⚠️ Exception: Use 'the' with plural country names, groups of islands, mountain ranges, and rivers — e.g., the Netherlands, the Philippines, the Himalayas, the Nile."
  },
  {
    title: "2️⃣ Before languages and academic subjects",
    examples: [
      {
        incorrect: "The English is difficult.",
        correct: "English is difficult.",
        explanation: "Language names are used without 'the'."
      },
      {
        incorrect: "The mathematics is interesting.",
        correct: "Mathematics is interesting.",
        explanation: "Academic subjects don’t take 'the'."
      }
    ],
    rule: "✅ Rule: Don’t use 'the' before languages or academic subjects.",
    exception: "⚠️ Exception: Use 'the' when specifying a particular branch or form, e.g., 'the English spoken in Canada' or 'the mathematics of chaos theory'."
  },
  {
    title: "3️⃣ Before meals, months, and days",
    examples: [
      {
        incorrect: "I’ll see you on the Monday.",
        correct: "I’ll see you on Monday.",
        explanation: "Days and months are used without 'the'."
      },
      {
        incorrect: "The breakfast was delicious.",
        correct: "Breakfast was delicious.",
        explanation: "Meals are used generally without 'the'."
      }
    ],
    rule: "✅ Rule: Don’t use 'the' before meals, months, or days when speaking generally.",
    exception: "⚠️ Exception: Use 'the' when referring to a specific meal or day, e.g., 'the breakfast we had at the hotel' or 'the Monday after Diwali'."
  }
];

let current = 0;

function loadFlashcard(index) {
  const card = flashcards[index];
  document.getElementById("ruleTitle").innerText = card.title;

  const tbody = document.getElementById("examples");
  tbody.innerHTML = card.examples
    .map(ex => `
      <tr>
        <td>${ex.incorrect}</td>
        <td>${ex.correct}</td>
        <td>${ex.explanation}</td>
      </tr>
    `).join("");

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
