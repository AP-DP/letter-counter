/**
 * @jest-environment jsdom
 */
import {expect, test} from "@jest/globals";
import { countLetters, generateText, shuffleString } from "../utils/counter";

describe("Counting Function Unit Tests", () => {

    // Test Cases and Expected Results
    const textEmptyExpectedResult = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, 
        k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, 
        u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    };
    const textSinglesExpectedResult = {
        a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, 
        k: 1, l: 1, m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, 
        u: 1, v: 1, w: 1, x: 1, y: 1, z: 1
    };
    const textMultiExpectedResult = {
        a: 5, b: 4, c: 1, d: 3, e: 1, f: 8, g: 2, h: 1, i: 7, j: 3, 
        k: 1, l: 1, m: 1, n: 4, o: 1, p: 5, q: 5, r: 1, s: 1, t: 1, 
        u: 1, v: 5, w: 6, x: 2, y: 1, z: 2
    };
    const textMissingExpectedResult = {
        a: 4, b: 0, c: 0, d: 2, e: 0, f: 0, g: 1, h: 1, i: 2, j: 0, 
        k: 1, l: 0, m: 1, n: 2, o: 1, p: 0, q: 0, r: 2, s: 2, t: 3, 
        u: 0, v: 0, w: 1, x: 0, y: 1, z: 0
    };
    
    // Basic cases
    const textEmpty = "";
    const textSingles = "Abcdefghijklmnopqrstuvwxyz";
    // Shuffled letters
    const testMultiLine1 = shuffleString(generateText(textMultiExpectedResult));
    // Added numbers and special characters
    const testMultiLine2 = shuffleString(generateText(textMultiExpectedResult) +
        "1".repeat(3) + "34".repeat(4) + "%".repeat(3) + "_".repeat(4) + " ");
    // Added newlines
    const testMultiLine3 = shuffleString(generateText(textMultiExpectedResult) + "\n".repeat(4));
    // Not all letters present
    const testMissingLetters = "It was a dark and stormy night...";

    const testCollection = [
        [textEmpty, textEmptyExpectedResult], 
        [textSingles, textSinglesExpectedResult], 
        [testMultiLine1, textMultiExpectedResult], 
        [testMultiLine2, textMultiExpectedResult], 
        [testMultiLine3, textMultiExpectedResult],
        [testMissingLetters, textMissingExpectedResult]
    ];

    testCollection.forEach((testString, expectedResult) => {
        test(`${testString}`, () => {
            // Convert Objects to strings for comparison
            let letterCount = countLetters(testString);
            let outputCount = JSON.stringify(letterCount);
            let expectedCount = JSON.stringify(expectedResult);
            expect(outputCount == expectedCount);
        });
    })
});