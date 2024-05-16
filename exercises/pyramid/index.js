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

// function pyramid(n) {
//   for (let i = 0; i < n; i++){
//     let level = '';

//     const totalLength = (n - 1) + n;
//     const middle = Math.floor(totalLength / 2)

//     const inicio = middle - i;
//     const final = middle + i;


//     for (let j = 0; j < totalLength; j++){
//       if (j >= inicio && j <= final) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level)
//   }
// }

// RECURSIVE SOLUTION


function pyramid(n, row = 0, level = '', column = 0) {
  const totalLength = 2 * n - 1;
  const middle = Math.floor(totalLength / 2);
  const inicio = middle - row;
  const final = middle + row;

  if (n === row && column === totalLength) {
    return;
  }

  if (level.length === totalLength) {
    console.log(level);
    return pyramid(n, row + 1, '', 0);
  }

  if (column >= inicio && column <= final) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level, column + 1)

}

module.exports = pyramid;
