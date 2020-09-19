class Polygon {
  constructor(array) {
    array.forEach((item, i) => {
      this[`side${i+1}`]=item;
    });
  }

  get countSides() {
    return Object.keys(this).length
  }

  get perimeter() {
    const result = (total,value) => total+value
    return Object.values(this).reduce(result)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if ((this.side1+this.side2)>this.side3 && (this.side1+this.side3)>this.side2 && (this.side2+this.side3)>this.side1) {
        return true
      } else {
        return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
      if (this.perimeter/this.countSides===this.side1) {
        return true
      } else {
        return false
    }
    }

  get area() {
    return this.side1*this.side1
  }
  }
