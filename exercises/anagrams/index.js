// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const firstStr = stringA.replace(/[^\w]/g, "").toLowerCase();
  const secondStr = stringB.replace(/[^\w]/g, "").toLowerCase();
  const firstChars = {};
  const secondChars = {};

  console.log("firstStr length", firstStr.length, "secondStr length", secondStr.length);

  if(firstStr.length === secondStr.length) {
    for (let char of firstStr) {
      if (!firstChars[char]) {
        firstChars[char] = 1;
      } else {
        firstChars[char]++;
      }
    }
  
    for (let char of secondStr) {
      if (!secondChars[char]) {
        secondChars[char] = 1;
      } else {
        secondChars[char]++;
      }
    }

    function sortedObject(unordered) {
      return Object.keys(unordered).sort().reduce(
        (obj, key) => {
          obj[key] = unordered[key];
          return obj;
        }, {});
    }

  return JSON.stringify(sortedObject(firstChars)) === JSON.stringify(sortedObject(secondChars))

  } else {
    return false;
  }
}

module.exports = anagrams;
 