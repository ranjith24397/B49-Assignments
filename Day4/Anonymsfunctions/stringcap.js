// Anonymous function to convert strings to title case
(function(arr) {
  for (let i = 0; i < strings.length; i++) {
    let words = arr[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      words[j] = words[j][0].toUpperCase() + words[j].substr(1)
    }
    arr[i] = words.join(" ");
  }
  console.log(arr);
})(strings);