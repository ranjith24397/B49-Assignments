const words = ['level', 'hello', 'racecar', 'world', 'madam'];

const palindromes = getPalindromesFromArray(words);

const isPalindrome = word => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
};

const getPalindromesFromArray = arr => {
  const palindromes = [];

  arr.forEach(word => {
    if (isPalindrome(word)) {
      palindromes.push(word);
    }
  });

  return palindromes;
};

// Example usage

console.log(palindromes);
