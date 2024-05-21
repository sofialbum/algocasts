// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibonacci = [0, 1];
  
  while(fibonacci.length <= n) {
    let sum = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]
    fibonacci.push(sum);
    
    
  }
  console.log(fibonacci[fibonacci.length -1])
  return fibonacci[fibonacci.length -1];
}

module.exports = fib;
