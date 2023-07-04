class Students{
  constructor(name,age,group){
    this.name = name;
    this.age = age;
    this.group = group;
  }
  
  print(){
    return (`${this.name} age is ${this.age} and studing in ${this.group}group.!!`)
  }
}

  var student1details = new Students("Ajay","22","computer");
  var student2details = new Students("Ram","23","Pure science");
  var student3details = new Students("Ashwin","21","Bio maths");
  console.log(student1details.print());
  console.log(student2details.print());
  console.log(student2details.print());