let arr = [1,2,3,4,4];
//let result = [];
let removeddup ="";

(function(){

  removeddup = [...new Set(arr)];
  console.log(removeddup);
})();

  