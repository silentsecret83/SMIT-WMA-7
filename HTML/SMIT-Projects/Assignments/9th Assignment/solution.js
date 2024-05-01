// Write JavaScript functions to solve the following string problems

// a) Return the length of a given string.

//function calculateLength(userName) {
//  return userName.lenght;
//}

//var userName = prompt("please enter your username:");
//console.log("Length of the username:", calculateLength(userName));

//b) Concatenate two strings together.

// var userInput1 = prompt("please enter the string");
// var userInput2 = prompt("please enter the string");

// console.log(userInput1 + " " + userInput2);

// c) Determine if a given string is empty.

//function checkString(str) {
//  if (!str.trim()) {
//    return "Empty String";
//  } else {
//    return "No Empty String";
//  }
//}

//var userInput = prompt("Please enter a string:");
//console.log(checkString(userInput));

//d) Count the number of vowels in a string.

//function countVowels(str) {
//  let count = 0;
//  str = str.toLowerCase(); // Convert the string to lowercase to count all vowels

//  for (let index = 0; index < str.length; index++) {
//    let character = str.charAt(index);
//    if (
//      character === "a" ||
//      character === "e" ||
//      character === "i" ||
//      character === "o" ||
//      character === "u"
//    ) {
//      count++;
//    }
//  }

//  return count;
//}

//var userInput = prompt("Please enter a string:");
//console.log("Number of vowels:", countVowels(userInput));

// e) Reverse a given string.
//function reverseString(str) {
//  let reversed = "";
//  for (let i = str.length - 1; i >= 0; i--) {
//    reversed += str[i];
//  }
//  return reversed;
//}

//var userInput = prompt("Please enter a string:");
//var reversedString = reverseString(userInput);
//console.log("Reversed string:", reversedString);

// f) Check if a string is a palindrome.

//function isPalindrome(str) {
//  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

//  let reversedStr = cleanStr.split("").reverse().join("");

//  return cleanStr === reversedStr;
//}

//var userInput = prompt("Please enter a string:");
//if (isPalindrome(userInput)) {
//  console.log("The string is a palindrome.");
//} else {
//  console.log("The string is not a palindrome.");
//}

// g) Convert a string to uppercase.

//function convertToUpperCase(str) {
//  return str.toUpperCase();
//}

//var userInput = prompt("Please enter a string:");
//var upperCaseString = convertToUpperCase(userInput);
//console.log("Uppercase string:", upperCaseString);

// h) Find the first occurrence of a given character in a string.

//function findFirstOccurrence(str, char) {
//  return str.indexOf(char);
//}

//var userInput = prompt("Please enter a string:");
//var charToFind = prompt("Please enter the character you want to find:");
//var firstOccurrenceIndex = findFirstOccurrence(userInput, charToFind);
//if (firstOccurrenceIndex !== -1) {
//  console.log(
//    "The first occurrence of '" + charToFind + "' is at index:",
//    firstOccurrenceIndex
//  );
//} else {
//  console.log("'" + charToFind + "' not found in the string.");
//}

// i) Replace all occurrences of a given character in a string with another character.

//function replaceAllOccurrences(str, charToReplace, replacementChar) {
// Create a regular expression to match all occurrences of the character globally
//  let regex = new RegExp(charToReplace, "g");
// Replace all occurrences of the character with the replacement character
//  return str.replace(regex, replacementChar);
//}

//var userInput = prompt("Please enter a string:");
//var charToReplace = prompt("Please enter the character you want to replace:");
//var replacementChar = prompt("Please enter the replacement character:");
//var replacedString = replaceAllOccurrences(
//  userInput,
//  charToReplace,
//  replacementChar
//);
//console.log("String after replacement:", replacedString);

// j) Trim leading and trailing whitespace from a string.

//function trimWhitespace(str) {
//    return str.trim();
//}

//var userInput = prompt("Please enter a string:");
//var trimmedString = trimWhitespace(userInput);
//console.log("String after trimming whitespace:", trimmedString);

// k) Count the number of words in a string.

//function countWords(str) {
// Split the string into an array of words based on whitespace
//  let words = str.split(" ");
// Return the number of words
//  return words.length;
//}

//var userInput = prompt("Please enter a string:");
//var wordCount = countWords(userInput);
//console.log("Number of words:", wordCount);

// l) Check if a string contains only numeric characters.

//function containsOnlyNumbers(str) {
//  for (let i = 0; i < str.length; i++) {
//    if (isNaN(parseInt(str[i]))) {
//      return false;
//    }
//  }
//  return true;
//}

//var userInput = prompt("Please enter a string:");
//if (containsOnlyNumbers(userInput)) {
//  console.log("The string contains only numeric characters.");
//} else {
//  console.log("The string does not contain only numeric characters.");
//}

// m) Check if a string is a valid email address.

//function isValidEmail(email) {
//  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//  return regex.test(email);
//}

//var userInput = prompt("Please enter an email address:");
//if (isValidEmail(userInput)) {
//  console.log("The email address is valid.");
//} else {
//  console.log("The email address is not valid.");
//}

// n) Extract the domain name from a URL string.

//function extractDomainFromURL(url) {
// Regular expression to match the domain part of a URL
//  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/;
// Match the domain part of the URL using the regular expression
//  const match = url.match(regex);
// If a match is found, return the domain part, otherwise return null
//  return match ? match[1] : null;
//}

//var userInput = prompt("Please enter a URL:");
//var domain = extractDomainFromURL(userInput);
//if (domain) {
//  console.log("Domain name:", domain);
//} else {
//  console.log("Invalid URL or domain name not found.");
//}

// o) Convert a string into title case (the first letter of each word capitalized).

//function toTitleCase(str) {
//  return str.replace(/\b\w/g, function (char) {
//    return char.toUpperCase();
//  });
//}

//var userInput = prompt("Please enter a string:");
//var titleCaseString = toTitleCase(userInput);
//console.log("Title case string:", titleCaseString);

// p) Remove all non-alphabetic characters from a string.

//function removeNonAlphabeticCharacters(str) {
//  return str.replace(/[^a-zA-Z]/g, "");
//}

//var userInput = prompt("Please enter a string:");
//var resultString = removeNonAlphabeticCharacters(userInput);
//console.log("String after removing non-alphabetic characters:", resultString);

// q) Check if a string is a valid palindrome permutation (ignoring spaces).

//function isValidPalindromePermutation(str) {
// Remove spaces and convert to lowercase
//  str = str.replace(/\s/g, "").toLowerCase();

// Count the frequency of each character
//const charCount = {};
//for (let char of str) {
//    charCount[char] = (charCount[char] || 0) + 1;
//  }

// Count the number of characters with odd frequency
//  let oddCount = 0;
//  for (let count of Object.values(charCount)) {
//    if (count % 2 !== 0) {
//      oddCount++;
//    }
// }

// Return true if at most one character has an odd frequency
//  return oddCount <= 1;
//}

// r) Check if a string is an anagram of another string.

//function isAnagram(str1, str2) {
// Remove spaces and convert to lowercase
//  str1 = str1.replace(/\s/g, "").toLowerCase();
//  str2 = str2.replace(/\s/g, "").toLowerCase();

// Check if the lengths of the strings are different
//  if (str1.length !== str2.length) {
//    return false;
//  }

// Count the frequency of characters in both strings
//  const charCount = {};
//  for (let char of str1) {
//    charCount[char] = (charCount[char] || 0) + 1;
//  }
//  for (let char of str2) {
//    if (!charCount[char]) {
//      return false; // If a character in str2 is not found in charCount, return false
//    }
//    charCount[char]--;
//  }

// Check if all character counts are zero
//  for (let count of Object.values(charCount)) {
//    if (count !== 0) {
//      return false;
//    }
//  }

//  return true;
//}

//var str1 = prompt("Please enter the first string:");
//var str2 = prompt("Please enter the second string:");
//if (isAnagram(str1, str2)) {
//  console.log("The strings are anagrams of each other.");
//} else {
//  console.log("The strings are not anagrams of each other.");
//}

// s) Find the longest word in a string.

//function findLongestWord(str) {
// Split the string into words
//    const words = str.split(/\s+/);
//    let longestWord = '';

// Iterate through each word and find the longest one
//    for (let word of words) {
//        if (word.length > longestWord.length) {
//            longestWord = word;
//        }
//    }

//    return longestWord;
//}

//var userInput = prompt("Please enter a string:");
//var longestWord = findLongestWord(userInput);
//console.log("Longest word:", longestWord);

//var userInput = prompt("Please enter a string:");
//if (isValidPalindromePermutation(userInput)) {
//  console.log("The string is a valid palindrome permutation.");
//} else {
//  console.log("The string is not a valid palindrome permutation.");
//}

// t) Perform string compression by replacing repeated characters with the character followed by the count.

//function compressString(str) {
//  let compressedString = "";
//  let count = 1;

// Iterate through the string
//  for (let i = 0; i < str.length; i++) {
// If the current character is the same as the next character, increment the count
//    if (str[i] === str[i + 1]) {
//      count++;
//    } else {
// Append the current character and its count to the compressed string
//      compressedString += str[i] + count;
// Reset the count for the next character
//      count = 1;
//    }
//  }

// Return the compressed string only if it is shorter than the original string
//  return compressedString.length < str.length ? compressedString : str;
//}

//var userInput = prompt("Please enter a string:");
//var compressedString = compressString(userInput);
//console.log("Compressed string:", compressedString);
