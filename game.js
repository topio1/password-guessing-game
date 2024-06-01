const words = {
    5: ["apple", "bread", "crane", "drive", "eagle", "flame", "grape", "house", "input", "joker"],
    6: ["banana", "circle", "dynamo", "effort", "flying", "glance", "hammer", "island", "jacket", "kitten", "mitten"],
    7: ["baggage", "cushion", "dynamic", "element", "freedom", "giraffe", "horizon", "impulse", "justice", "kingdom"]
};

let selectedWords = [];
let correctWord = "";
let attempts = 0;

function startGame() {
    const wordLength = document.getElementById("word-length").value;
    selectedWords = words[wordLength];
    correctWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    attempts = 0;

    // Display the list of words
    const wordListDiv = document.getElementById("word-list");
    wordListDiv.innerHTML = "";
    selectedWords.forEach(word => {
        const wordDiv = document.createElement("div");
        wordDiv.textContent = word;
        wordListDiv.appendChild(wordDiv);
    });

    // Clear feedback and guess input
    document.getElementById("feedback").textContent = "";
    document.getElementById("guess").value = "";
}

function makeGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    if (!selectedWords.includes(guess)) {
        document.getElementById("feedback").textContent = "Invalid guess. Please select a word from the list.";
        return;
    }

    attempts++;
    if (attempts > 4) {
        document.getElementById("feedback").textContent = `Game over! The correct word was "${correctWord}".`;
        return;
    }

    const correctLetters = getCorrectLetters(guess, correctWord);
    if (correctLetters === correctWord.length) {
        document.getElementById("feedback").textContent = `Congratulations! You've guessed the correct word: "${correctWord}".`;
    } else {
        document.getElementById("feedback").textContent = `You have ${correctLetters} correct letter(s) in the correct position.`;
    }
}

function getCorrectLetters(guess, correctWord) {
    let count = 0;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === correctWord[i]) {
            count++;
        }
    }
    return count;
}
