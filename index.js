// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] > this.sides[2] && 
            this.sides[1] + this.sides[2] > this.sides[0] &&
            this.sides[0] + this.sides[2] > this.sides[1]){
                return true
            } 
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        const checkSides = (currentValue) => currentValue == this.sides[0];
        if (this.count == 4 && this.sides.every(checkSides)){
            return true
        }
        return false
    }
        

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2
        }
    }
}