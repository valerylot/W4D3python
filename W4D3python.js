/* 
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "abcde";
const expected3 = "edcba";


/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    // let sliced = ""
    if (str.length === 0){
        return ""
    }
    // sliced = str.slice (str.length-1)
    return reverseStr(str.slice(1)) + str[0];
    // return str.slice(0,(str.length))    
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))
console.log(reverseStr(str3))
/*****************************************************************************/