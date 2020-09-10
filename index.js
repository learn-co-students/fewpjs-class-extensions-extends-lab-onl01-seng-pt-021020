// Your code here
class Polygon {
	constructor(sidesArray) {
		this.sidesArray = sidesArray;
	}
	get countSides() {
		return this.sidesArray.length;
	}

	get perimeter() {
		return this.sidesArray.reduce((acc, currVal) => {
			return acc + currVal;
		});
	}
}

class Triangle extends Polygon {
	get isValid() {
    let [ a, b, c ] = this.sidesArray
    return (a + b <= c || b + c <= a || a + c <= b) ? false : true;
	}
}

class Square extends Polygon {
	get isValid() {
    let [a, b, c, d] = this.sidesArray
   return (a && b && c == d) ? true : false
  }

	get area() {
    return this.sidesArray[0]**2
  }
}
let three = new Triangle([ 1, 2, 3 ]);
console.log(three.isValid);
