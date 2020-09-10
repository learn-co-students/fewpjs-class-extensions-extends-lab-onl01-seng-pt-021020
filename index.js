// Your code here
class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((a,b)=>a+b,0)
  }
}

class Triangle extends Polygon {
  get isValid(){
    let [a,b,c] = this.sides
     if (a + b <= c || a + c <= b || b + c <= a && this.countSides === 3) {
        return false;
      }else{
        return true;
      }
   }
}

class Square extends Polygon {
  get isValid(){
    if (this.countSides === 4) {
      return this.sides.every( (val, i, arr) => val === arr[0] )
      }
    }
  get area(){
    return this.sides[0] **2
  }
}
