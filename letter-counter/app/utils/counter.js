// Letter counter function and functions related to testing
const superStrings = require('@supercharge/strings')
const ALPHABET = "abcdefghijklmnopqrstuvwxyz"

/**
 * Analyze text (newline characters permitted) and count the number of occurrences of each letter of the alphabet.
 * @param {string} textInput
 * @returns {Object} An object describing the number of each letter contained in the text
 */
function countLetters(textInput) {
    // For testing purposes, assert input is a string
    let content = toString(textInput);
    // Find only letters in input (i.e. exclude white space, numbers, special symbols)
    let onlyLetters = content.replace(/[^a-z]/gmi, "");
    // Check for empty string
    let letterArray = [];
    if (onlyLetters !== null) {
        let lowercaseLetters = onlyLetters.toLowerCase();
        // Convert string to an array and sort
        letterArray = [...lowercaseLetters];
        // Array sorted for testing to ensure Object is the same using JSON.stringify
        letterArray = letterArray.sort();
    }
    // Iterate over array to increment letter counts
    let letterCounts = {};
    let unusedLetters = [...ALPHABET];
    for (let i = 0; i < letterArray.length; i++) {
        let char = letterArray[i];
        letterCounts[char] = (letterCounts[char] || 0) + 1;
        // Keep track of used letters
        if (unusedLetters.includes(char)) {
            let letterIndex = unusedLetters.indexOf(char);
            let reducedAlphabet = unusedLetters.filter((_, index) => index !== letterIndex);
            unusedLetters = reducedAlphabet;
        }
    }
    // Add data for unused letters
    unusedLetters.forEach((char) => {
        letterCounts[char] = 0;
    })
    return letterCounts;
}

/**
 * Create a string containing a specified number of each character (may be upper- or lowercase)
 * @param {Object} charOccurences - { char: number }
 * @returns String containing specified number of characters
 */
function generateText(charOccurences) {
    let chars = Object.keys(charOccurences);
    let stringOutput = "";
    chars.forEach((char) => {
        let numRepeats = charOccurences[char];
        for (let i = 0; i < numRepeats; i++) {
            let caseFactor = Math.random();
            // Randomly convert some letters to upper case
            if (caseFactor > 0.5) {
                char = char.toUpperCase();
            }
            stringOutput += char;
        }
    });
    return stringOutput;
}

/**
 * Uses supercharge/strings package to shuffle string
 * @param {string} inputString 
 * @returns shuffled version of input string
 */
function shuffleString(inputString) {
    let shuffled = superStrings.Str(inputString).shuffle().get();
    return shuffled;
}

module.exports = { countLetters, generateText, shuffleString };
