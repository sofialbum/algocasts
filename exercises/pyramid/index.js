// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++){
    let level = '';

    const totalLength = (n - 1) + n;
    const middle = Math.floor(totalLength / 2)

    const inicio = middle - i;
    const final = middle + i;


    for (let j = 0; j < totalLength; j++){
      if (j >= inicio && j <= final) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level)
  }
}

module.exports = pyramid;
