function reverse(word){
  // const wordArray = word.split('');
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join('');
  return word.split('').reverse().join('');
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverse(word)

  // if the input is the same as the reversed input 
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string

  if the input is the same as the reversed input 
    return true
  else
    return false  
*/

/*
  Create a function that returns true if a word is a palindrome
  and false if not.
  If the word is the same word in reverse then its true;
  if not then its false
- Example: 
  if we console.log "mom" it returns true; 
  if we console.log "star" it returns false;
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("nice"));
}

module.exports = isPalindrome;
