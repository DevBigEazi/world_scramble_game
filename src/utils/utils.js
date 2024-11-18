import { randomWords } from "../data/data";

export function scrambleWord(randomWord) {
    return randomWord.split("").sort(() => 0.5 - Math.random()).join("");
}

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    return randomWords[randomIndex];
}