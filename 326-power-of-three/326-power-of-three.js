/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 3 || n === 1) return true;
    if(n === 0 || n < 3) return false;
    while(n > 3) {
        n = n/3;
        if(n%3 !== 0) return false;
    }
    return true;
    
};
