const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1; 
let rolls = 0; 

const rollDice = () => {
    diceValuesArr = Array.from({length: 5}, () => Math.ceil(Math.random() * 6));

    diceValuesArr.forEach((value, index) => {
        if (listOfAllDice[index]) {
            listOfAllDice[index].textContent = value;
        }
    });
};

function updateStats(){
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
}

function updateRadioOption(index, score){
  if(index < 0 || index >= scoreInputs.length){
    console.error(`Index ${index} is out of bounds for scoreInputs.`);
    return;
  }

  const input = scoreInputs[index];
  input.disabled = false;
  input.value = score;

  const span = scoreSpans[index];
  if (span) {
    span.textContent = `, score = ${score}`;
  }
}

function getHighestDuplicates(array) {
    function getHighestDuplicates(array) {
    if (!Array.isArray(array)) {
        console.error("Input is not a valid array:", array);
        return;
    }

    const counts = {};
    array.forEach(value => {
        counts[value] = (counts[value] || 0) + 1;
    });

    const totalSum = array.reduce((sum, val) => sum + val, 0);
    let hasThreeOfAKind = false;
    let hasFourOfAKind = false;

    for (const [value, count] of Object.entries(counts)) {
        if (count >= 4) {
            hasFourOfAKind = true;
        }
        if (count >= 3) {
            hasThreeOfAKind = true;
        }
    }

    if (hasThreeOfAKind) {
        updateRadioOption(0, totalSum);
    }

    if (hasFourOfAKind && !hasThreeOfAKind) {
        updateRadioOption(1, totalSum);
    }

    updateRadioOption(2, 0);
}
}


rollDiceBtn.addEventListener("click", () => {
    if(rolls < 3){
        rollDice();
        rolls++;
        updateStats();
        getHighestDuplicates(diceValuesArr);
    } else {
        alert('You can only roll the dice up to 3 times per round.');
    }
});

rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;
    rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules";
    rulesContainer.style.display = isModalShowing ? "block" : "none";
});