class Polygon {
    constructor(array) {
        this.sides = array
    }
    get countSides() {
        return this.count = this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(perimeter, side){
            return perimeter + side
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count === 3) {
            return true
        }
        else { 
            return false 
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count === 4 && this.sides[0] === this.sides[1]) {
            return true;
        }
        else {
            return false;
        }
    }
    get area() {
        return this.sides[0]*this.sides[0]
    }
}