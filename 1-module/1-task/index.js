/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
   function factorial(n) {

    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
    if (n==0) return 1;
    if (n==1) return 1;
    
    let i = 1;
    let result = n;

    while ( n > i ) {
      result = result * (n-i);
      i = i + 1;
    }
    return result;

   }