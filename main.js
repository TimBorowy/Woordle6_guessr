/*
import { wordlist } from "./wordlist2.js";

// The word must EXCLUDE these chars
const excludeChars = "qwrupslcbnm";
// The word must INCLUDE these chars
const containChars = "etoa";

const excludeFilter = wordlist.filter((word) => {
  let wordContainsForbiddenChar = false;
  [...excludeChars].forEach((xLetter) => {
    if (word.includes(xLetter)) {
      wordContainsForbiddenChar = true;
    }
  });

  if (!wordContainsForbiddenChar) {
    return true;
  }

  return false;
});

const includeFilter = excludeFilter.filter((word) => {

  // Check if word contains ALL characters with .every()
  const wordContainsChars = [...containChars].every((xLetter) => {
    return word.includes(xLetter);
  });

  return wordContainsChars;
});

// Log the word options
console.log(includeFilter);
*/


// ChatGPT documented and improved code

import { wordlist } from "./wordlist2.js";

/**
 * Filters words based on exclusion and inclusion criteria.
 * 
 * Excludes words containing any characters from `excludeChars`.
 * Includes words containing all characters from `containChars`.
 */

// Characters to exclude from the word
const excludeChars = "bastomph";

// Characters the word must include
const containChars = "endel";

/**
 * Filters out words that contain any of the characters in `excludeChars`.
 * @param {string[]} words - The list of words to filter.
 * @param {string} excludeChars - A string of characters to exclude.
 * @returns {string[]} - The filtered list of words.
 */
const filterExcludedChars = (words, excludeChars) => {
  return words.filter(word =>
    ![...excludeChars].some(char => word.includes(char))
  );
};

/**
 * Filters in words that contain all of the characters in `containChars`.
 * @param {string[]} words - The list of words to filter.
 * @param {string} containChars - A string of characters that must be included.
 * @returns {string[]} - The filtered list of words.
 */
const filterIncludedChars = (words, containChars) => {
  return words.filter(word => 
    [...containChars].every(char => word.includes(char))
  );
};

// Apply the filters
const excludeFilter = filterExcludedChars(wordlist, excludeChars);
const includeFilter = filterIncludedChars(excludeFilter, containChars);

// Log the word options
console.log(includeFilter);
