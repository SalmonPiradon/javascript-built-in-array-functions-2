function isPalindrome(string) {
  // Start coding here
  //check if word is palindrome (*reverse text and it returns the same)
  let reverseWord = string.split("").reverse().join("").trim();
  if (string === reverseWord) {
    return true;
  } return false;
}
//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false