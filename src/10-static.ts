class MyMath {
  static readonly PI = 3.14

  static max(...params: number[]) {

    return params.reduce((max,item) => max >= item ? max : item)
  }
}

//console.log('MyMath', MyMath.PI);
const numbers = [-1,-6,-2,-4]
console.log('MyMath.max', MyMath.max(...numbers))


