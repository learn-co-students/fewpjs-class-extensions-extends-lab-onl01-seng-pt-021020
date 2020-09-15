class Polygon {
  constructor(sideLengthsArr) {
    this._sides = sideLengthsArr
  }

  get countSides() {
    return this._sides.length
  }

  get perimeter() {
    return this._sides.reduce((a,b) => a + b)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      if (this._sides[0] + this._sides[1] > this._sides[2]) {
        if (this._sides[0] + this._sides[2] > this._sides[1]) {
          return this._sides[1] + this._sides[2] > this._sides[0]
        }
      }
    }
    return false
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      return this._sides[0] === this._sides[1] && this._sides[1] === this._sides[2] && this._sides[2] === this._sides[3]
    }
    return false
  }

  get area() {
    return this._sides[0] ** 2
  }
}