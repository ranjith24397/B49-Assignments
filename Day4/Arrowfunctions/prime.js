((arr)=> {
  const isPrime = function(num) {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  arr.forEach(function(num) {
    if (isPrime(num)) {
      console.log(num);
    }
  });
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
