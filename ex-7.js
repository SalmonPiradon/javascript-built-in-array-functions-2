function isPalindrome(string) {
  // Start coding here
  string = string.trim();
  return string === string.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false