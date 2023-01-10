//el patron singleton solo nos deja crear una instancia de la clase

class MyService {
  // 1. bandera donde guardemos la instancia a devolver, debe ser privado y estatico
  private static instance: MyService | null = null;
  // 2. un constructor privado
  private constructor(private _name: string) {
    //empty
  }
  // 3.metodo estatico que crea una instancia si aun no existe y si ya existe devuelve la misma.
  static create(name: string): MyService {
    if (!MyService.instance) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }

  get name(): string {
    return this._name;
  }
}

const service1 = MyService.create('mysql');
console.log('service name1', service1.name);

const service2 = MyService.create('mongo');
console.log('service name2', service2.name);

console.log('isTheSame', service1 === service2);
