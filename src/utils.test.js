import { describe, expect, test } from "vitest";
import { scrambleWord, getRandomWord, words } from "./utils/utils";

describe("Utility Functions", () => {
    test("scrambleWord returns a scrambled version of the word", () => {
        const word = "developer";
        const scrambled = scrambleWord(word);

        // Ensure the scrambled word is not the same as the original word
        expect(scrambled).not.toEqual(word);

        // Ensure the scrambled word contains the same letters
        expect(scrambled.split("").sort()).toEqual(word.split("").sort());
    });

    test("scrambleWord handles empty strings correctly", () => {
        const word = "";
        const scrambled = scrambleWord(word);

        // Empty string should return an empty string
        expect(scrambled).toEqual("");
    });

    test("getRandomWord returns a word from the predefined list", () => {
        const randomWord = getRandomWord();

        // Ensure the random word is one of the words in the list
        expect(words).toContain(randomWord);
    });

    test("getRandomWord doesn't return undefined or null", () => {
        const randomWord = getRandomWord();

        // Ensure the function never returns undefined or null
        expect(randomWord).not.toBeUndefined();
        expect(randomWord).not.toBeNull();
    });
});
