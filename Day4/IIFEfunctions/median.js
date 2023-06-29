const median = ((arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const midIndex = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    return mergedArray[midIndex];
  }
})([1, 3, 5], [2, 4, 6]);

console.log(median); 
