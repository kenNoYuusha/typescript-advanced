export class MyDate {

  constructor(
    private year: number = 1993,
    private month: number = 7,
    private _day: number = 9,
  ) {}

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPading(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  //es como una propiedad virtual, nos permite simular una propiedad
  //pero con los beneficios de un metodo donde podemos hacer validaciones antes de retornar el valor
  //una practica comun es agregarle _ al inicio de la propiedad para diferenciarla del getter.
  get day(): number {
    return this._day;
  }
  //todos los getters deben retornar algo obligatoriamente.
  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat())
console.log('day =>', myDate.day)
console.log("viciesto", myDate.isLeapYear)

const myDate1 = new MyDate(2000,9,5)
const myDate2 = new MyDate(2001,5,1)
const myDate3 = new MyDate(2004,1,1)

console.log('MyDate1', myDate1.isLeapYear);
console.log('MyDate2', myDate2.isLeapYear);
console.log('MyDate3', myDate3.isLeapYear);




