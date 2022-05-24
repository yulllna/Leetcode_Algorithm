/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(s)
    if(s == " ") return true;
    if(s.split('').reverse().join('')!==s) return false;
    return true;
}