export class Animal {
  constructor(
    public name: string,
  ){}

  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  //solo recibimos el name para pasarlo al constructor
  //no lo volvemos a inicializar.
  constructor(
    name:string,
    public owner:string,
  ){
    super(name)
  }

  bark(times: number):void {
    for(let index = 0; index < times; index ++){
      console.log('woof');
    }
  }
}

// const fifi = new Animal("fifi")
// fifi.move();
// console.log(fifi.greeting());

const cheis = new Dog('cheis',"jorge")
console.log('name => ', cheis.name)
console.log(cheis.owner)

// Si la clase hija no tiene su propio constructor, entonces el constructor de la clase padre será llamado automáticamente cuando se instancie la clase hija. Sin embargo, si la clase hija tiene su propio constructor, entonces será necesario llamar al constructor de la clase padre explícitamente desde dentro del constructor de la clase hija para poder inicializar correctamente la clase hija.
