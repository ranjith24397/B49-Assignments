const jsonData = [
  { id: 1, name: 'Ram', age: 25 },
  { id: 2, name: 'Raju', age: 30 },
  { id: 3, name: 'Babu', age: 35 }
];

//for loop

for (let i = 0; i < jsonData.length; i++) {
  console.log(jsonData[i]);
}

//for of

for (const item of jsonData) {
  console.log(item);
}

//for in

for (const key in jsonData) {
  console.log(jsonData[key]);
}
 
//for each

jsonData.forEach(item => {
  console.log(item);
});

