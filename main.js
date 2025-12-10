import { wordlist } from "./wordlist2.js";

/**
 * Filters words based on exclusion and inclusion criteria.
 *
 * Excludes words containing any characters from `excludeChars`.
 * Includes words containing all characters from `containChars`.
 */

// Characters to exclude from the word
// Dont add letter that you might suspect to be double
const excludeChars = "";

// Characters the word must include
const containChars = "";

// Place characters in this order
const charPlacement = ["*", "*", "*", "*", "*", "*"];

/**
 * Filters out words that contain any of the characters in `excludeChars`.
 * @param {string[]} words - The list of words to filter.
 * @param {string} excludeChars - A string of characters to exclude.
 * @returns {string[]} - The filtered list of words.
 */
const filterExcludedChars = (words, excludeChars) => {
  return words.filter((word) => ![...excludeChars].some((char) => word.includes(char)));
};

/**
 * Filters words based on:
 * 1. Characters that must appear anywhere in the word
 * 2. Placement rules per character index
 *
 * Placement rule formats:
 *  - "*"       → wildcard
 *  - "x"       → must be exactly 'x'
 *  - "!abc"    → must NOT be a, b, or c
 *
 * @param {string[]} words
 * @param {string} containChars
 * @param {string[]} placementRules
 * @returns {string[]}
 */
const filterIncludedCharsV3 = (words, containChars, placementRules) => {
  return words.filter(word => {
    // Check required chars exist anywhere
    const hasAllChars = [...containChars].every(char => word.includes(char));
    if (!hasAllChars) return false;

    // Check placement rules
    for (let i = 0; i < placementRules.length; i++) {
      const rule = placementRules[i];
      const letter = word[i];

      if (!rule || rule === "*") continue; // wildcard

      // Must NOT be these characters
      if (rule.startsWith("!")) {
        const forbidden = rule.slice(1);
        if (forbidden.includes(letter)) return false;
        continue;
      }

      // Must be exactly this character
      if (letter !== rule) return false;
    }

    return true;
  });
};

const excludeFilter = filterExcludedChars(wordlist, excludeChars);
const includeFilter = filterIncludedCharsV3(excludeFilter, containChars, charPlacement);

console.log(includeFilter);

console.log("Random word:", includeFilter[Math.floor(Math.random() * includeFilter.length)]);
