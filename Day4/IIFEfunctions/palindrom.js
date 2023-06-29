const palindromes = (function(arr) {
  const isPalindrome = word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  };

  const palindromes = [];

  arr.forEach(word => {
    if (isPalindrome(word)) {
      palindromes.push(word);
    }
  });

  return palindromes;
})(['level', 'hello', 'racecar', 'world', 'madam']);

console.log(palindromes); 
