//cuando una clase es abstracta, no se puede instanciar
//solo a travez de sus clases hijas
export abstract class Animal {
  constructor(
    public name: string,
    public weight: number,
    public limbs: string,
  ){
    //empty
  }
  greeting():string {
    return `Hi Im a regular animal`;
  }
}

export class Dolphin extends Animal {
  greeting(): string {
    return `I'm an acuatic animal, i like swimming`
  }
}

//esto lanzara un error porque no se pueden instanciar clases abstractas
// ----> const animal = new Animal("animal", 15, "legs");
const dolphin = new Dolphin("Dixie", 10, "fins")
console.log(dolphin.greeting())
