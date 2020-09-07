class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = this.sides.length;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.sides.length; i++) {
      perimeter += this.sides[i];
    }
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    return (
      side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
    );
  }
}

class Square extends Polygon {
  get area() {
    let side = this.sides[0];
    return side * side;
  }

  get isValid() {
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    let side4 = this.sides[3];

    return side1 === side2 && side1 === side3 && side1 === side4;
  }
}
