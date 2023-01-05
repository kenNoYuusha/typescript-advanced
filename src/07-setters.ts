export class MyDate {

  constructor(
    private year: number = 1993,
    private _month: number = 7,
    private _day: number = 9,
  ) {}

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month(){
    return this._month;
  }
  //con los setters podemos hacer validaciones antes de asignar un valor a una propiedad.
  set month(value:number){
    if(value > 0 && value <= 12){
      this._month = value
    } else {
      throw new Error("value is not in range");
    }
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat())
myDate.month = 9;
console.log(myDate.printFormat())






