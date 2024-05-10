function reverseString(str) {
  // type your code here
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * 1. Reverse the sequence of characters. 2. Understood
 * 
 * 3. abcdefg => gfedcba
 *    Adnan => nandA
 *    Hi, I'm John => nhoJ m'I ,iH
 * 
 * 4. Puesdocode
 * 
 * function reverse(string) {
 *  let reversedString = ""
 *  for (let i = string.length - 1; i >= 0; i--) {
 *    reveresedString += string[i]
 *  }
 *  return reversedString
 * } 
 */