function isPalindrome(line) {
 let palindromeChecker = line.toString().split('').reverse().join('')

 if(palindromeChecker == line){
   return true;
 }
  else {
    return false;
  }
}
