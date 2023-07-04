class Uberprice{
  constructor(unitprice,kilometer){
    this.price = unitprice;
    this.km = kilometer;
  }

  calculate(){
    return (`The price for your ride is Rs:${this.price * this.km}`)
  }
}

  var myride1 = new Uberprice(2,20);
  var myride2 = new Uberprice(2,46);
  var myride3 = new Uberprice(2,89);
  console.log(myride1.calculate());
  console.log(myride2.calculate());
  console.log(myride3.calculate());
