const flashcards = [
  {
    title: "Before general, plural, or uncountable nouns",
    table: `
      <table>
        <tr><th>❌ Incorrect</th><th>✅ Correct</th><th>Explanation</th></tr>
        <tr><td>The cats are friendly animals.</td><td>Cats are friendly animals.</td><td>Talking about cats in general, not specific cats.</td></tr>
        <tr><td>The milk is good for health.</td><td>Milk is good for health.</td><td>Milk = uncountable, general sense.</td></tr>
        <tr><td>The honesty is important.</td><td>Honesty is important.</td><td>Honesty = abstract idea.</td></tr>
      </table>
      <p class="rule"><b>✅ Rule:</b> Don’t use <i>the</i> before nouns when you speak generally, not about a specific instance.</p>
      <p class="exception"><b>⚠️ Exception:</b> Use <i>the</i> when referring to specific or previously mentioned nouns (e.g., <i>The cats next door are noisy</i>, <i>The milk in the fridge is spoiled</i>).</p>
    `
  },
  {
    title: "Before most proper nouns",
    table: `
      <table>
        <tr><th>❌ Incorrect</th><th>✅ Correct</th><th>Explanation</th></tr>
        <tr><td>The India is a big country.</td><td>India is a big country.</td><td>Countries usually don’t take <i>the</i>.</td></tr>
        <tr><td>The Mount Everest is high.</td><td>Mount Everest is high.</td><td>Names of mountains don’t take <i>the</i>.</td></tr>
        <tr><td>The Shakespeare wrote plays.</td><td>Shakespeare wrote plays.</td><td>Names of people don’t take <i>the</i>.</td></tr>
      </table>
      <p class="rule"><b>✅ Rule:</b> Don’t use <i>the</i> before most names of people, countries, and cities.</p>
      <p class="exception"><b>⚠️ Exception:</b> Use <i>the</i> with plural or descriptive country names and geographical groups (e.g., <i>the Netherlands</i>, <i>the Philippines</i>, <i>the United States</i>, <i>the Himalayas</i>).</p>
    `
  },
  {
    title: "Before languages and subjects",
    table: `
      <table>
        <tr><th>❌ Incorrect</th><th>✅ Correct</th><th>Explanation</th></tr>
        <tr><td>The English is difficult.</td><td>English is difficult.</td><td>Languages don’t take <i>the</i>.</td></tr>
        <tr><td>The mathematics is interesting.</td><td>Mathematics is interesting.</td><td>Subjects are used without <i>the</i>.</td></tr>
      </table>
      <p class="rule"><b>✅ Rule:</b> Don’t use <i>the</i> before names of languages or academic subjects.</p>
      <p class="exception"><b>⚠️ Exception:</b> Use <i>the</i> when referring to a specific type or branch (e.g., <i>The English of Shakespeare’s time was different</i>, <i>The mathematics of chaos theory is complex</i>).</p>
    `
  },
  {
    title: "Before meals, days, and holidays",
    table: `
      <table>
        <tr><th>❌ Incorrect</th><th>✅ Correct</th><th>Explanation</th></tr>
        <tr><td>The breakfast was delicious.</td><td>Breakfast was delicious.</td><td>Meals in general don’t take <i>the</i>.</td></tr>
        <tr><td>I will meet you on the Monday.</td><td>I will meet you on Monday.</td><td>Days don’t take <i>the</i>.</td></tr>
        <tr><td>The Christmas is my favorite holiday.</td><td>Christmas is my favorite holiday.</td><td>Holidays don’t take <i>the</i>.</td></tr>
      </table>
      <p class="rule"><b>✅ Rule:</b> Omit <i>the</i> with meals, days, and holidays when used generally.</p>
      <p class="exception"><b>⚠️ Exception:</b> Use <i>the</i> when specifying (e.g., <i>The breakfast at the hotel was delicious</i>, <i>The Monday after the exam was hectic</i>).</p>
    `
  },
  {
    title: "Before transport with ‘by’",
    table: `
      <table>
        <tr><th>❌ Incorrect</th><th>✅ Correct</th><th>Explanation</th></tr>
        <tr><td>I go to school by the bus.</td><td>I go to school by bus.</td><td>‘By’ removes the article.</td></tr>
        <tr><td>She came by the train.</td><td>She came by train.</td><td>General transport form uses no <i>the</i>.</td></tr>
      </table>
      <p class="rule"><b>✅ Rule:</b> Don’t use <i>the</i> after <i>by</i> when talking about transport in general.</p>
      <p class="exception"><b>⚠️ Exception:</b> Use <i>the</i> when referring to a specific vehicle (e.g., <i>I missed the bus to Delhi</i>, <i>The train we took was late</i>).</p>
    `
  }
];

let current = 0;
const card = document.getElementById("card");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");

function showCard() {
  front.innerHTML = `<h2>${flashcards[current].title}</h2>`;
  back.innerHTML = flashcards[current].table;
}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {
  current = (current + 1) % flashcards.length;
  card.classList.remove("flipped");
  showCard();
}

function prevCard() {
  current = (current - 1 + flashcards.length) % flashcards.length;
  card.classList.remove("flipped");
  showCard();
}

showCard();
