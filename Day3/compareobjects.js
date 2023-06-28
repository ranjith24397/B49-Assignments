const obj1 = { Name: "Person1", age: 5 };
const obj2 = { age: 5, Name: "Person1" };

function compareObjects() {
  
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (var key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
      return false;
    }
  }

  return true;
}
  let result = compareObjects();
  console.log(result);