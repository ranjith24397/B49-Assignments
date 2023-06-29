let str = [1,2,3,4,5,6,,7,8,9,10];

let sumnum = 0;

(function(){
  for(var c in str){
    sumnum += Number(str[c]);
  
  }
  console.log(sumnum);
})();
 
  