let numbers = [1,2,3,4,5,6,7,8,9,10];
let oddnum = [];

(function (){
  for(let i in numbers){
    if(numbers[i]%2 != 0){
       oddnum.push(numbers[i]);
      
    }
  }
  console.log(oddnum);
})();
 
