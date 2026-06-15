function isPalindrome(string) {
  let backString = string.split("").reverse().join("");
  console.log(backString);
  if (string === backString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
