//todo lo que coloques en una interfaz va a ser publico
//si se quiere un metodo o propiedad privada se debe hacer dentro de la clase
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect():void;
  disconnect():void;
  isConnected(name:string):boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
// }

//implementando una interfaz en una clase
class PostgressDriver implements Driver {

  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){
    //empty
  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }

  public connect(): void {
    throw new Error("Method not implemented.");
  }

}
//implementando interfaz en otra clase
class OracleDriver implements Driver {

  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){
    //empty
  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }

}
