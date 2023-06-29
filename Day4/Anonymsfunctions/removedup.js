let arr = [1,2,3,4,4];
//let result = [];
let removeddup ="";
var removedup = function(){

  removeddup = [...new Set(arr)];
  return removeddup;
}
  var result = removedup();
  console.log(result);
