export class Animal {
  constructor(
    //protected, proteje nuestras propiedades para que nos las modifiquen desde afuera
    //ademas con protected nos deja que nuestras claes hijas puedan utilizar la propiedad
    //al contrario del acceso private que bloquea a todos de poder usar las propiedades
    protected name: string
  ) {}

  move(): void {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  get description(){
    return 'Im a general animal';
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! I'm ${this.name}`);
    }
  }
  //podemos sobreescribir metodos de la clase padre para hacer cosas mas especificas
  //podemos invocar al metodo de la clase padr que estamos sobreescribiendo.
  move(): void {
    console.log('Moving as dog!!!...');
    //super.move();
  }
  get description(){
    return `I'm a doggie animal from ${super.description}`;
  }
}

const animal = new Animal('animalito');
const cheis = new Dog('cheis', 'jorge');

// animal.move();
// cheis.move();

console.log(animal.description)
console.log(cheis.description)
