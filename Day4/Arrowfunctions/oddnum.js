let numbers = [1,2,3,4,5,6,7,8,9,10];
let oddnum = [];

var odd = ()=>{
  for(let i in numbers){
    if(numbers[i]%2 != 0){
       oddnum.push(numbers[i]);
       
    }
  }
  return (oddnum);  
}  
  var result = odd();
  console.log(result);