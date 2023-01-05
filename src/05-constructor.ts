export class MyDate {
  //shortcut para tipar e inicializar la variable en el objeto this de la instancia
  //debe ser explicito con el acceso de lo contrario no funcionara.
  //no funcion con RORO
  //opcionalmente se le puede dar un valor por defecto a los parametros.
  constructor(
    private year: number = 1993,
    private month: number = 7,
    private day: number = 9,
  ) {}

  printFormat(): string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPading(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  getDay(): number {
    return this.day;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

//al estar los parametros por defecto en el constructor
//al hacer la llamada podemos no enviarle parametros o la cantidad que eligamos
const myDate = new MyDate();
console.log(myDate.printFormat())

const myDate2 = new MyDate(2022);
console.log(myDate2.printFormat())
