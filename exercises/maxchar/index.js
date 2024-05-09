// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let maxKey = null;
  let maxValue = 0;

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (let key in chars) {
    if (chars[key] > maxValue) {
      maxValue = chars[key];
      maxKey = key;
    }
  }
  return maxKey;
}

module.exports = maxChar;