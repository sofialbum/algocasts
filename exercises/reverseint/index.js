// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString();
  const arr = str.split("").reverse();

  if (arr.includes("-")) {
    // elimino el primer item del array
    arr.pop();
    // agrego un signo "-" al inicio del array
    arr.unshift("-");
    // uno todos los items del array en un string
    const final = arr.join('');
    // convierto ese string a numero
    return Number(final);
  } else {
    return Number(arr.join(""));
  }
}

module.exports = reverseInt;
