const toTitleCase = (str) => {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
};

const printTitleCaps = (arr) => {
  arr.forEach((str) => {
    const titleCaseStr = toTitleCase(str);
    console.log(titleCaseStr);
  });
};

// Example usage
const strings = ['hello world', 'javascript is awesome', 'title caps'];

printTitleCaps(strings);
