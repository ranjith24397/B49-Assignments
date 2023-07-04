class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius(){
    return this.radius;
    }
  setRadius(value){
    this.radius = value;
    }
  getColor()
  {
    return this.color;
  }
  setColor(value1)
  {
    this.color = value1;

  }
  
  getArea()
  {
    return (Math.PI * this.radius * this.radius);
    }
  getCircumference()
  {
    return (2 * Math.PI * this.radius);
    };
  }

let cir = new Circle(1.0, "red");
console.log(cir.getRadius());
console.log(cir.getColor());
console.log(cir.getArea());
console.log(cir.getCircumference());