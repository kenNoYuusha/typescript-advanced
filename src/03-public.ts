export class MyDate {
  //podemos usar la palabra reservada public, o dejarlo que el lo infiera
  //porque el usa acceso public por default.
  public year: number;
  public month: number;
  public day: number;
  constructor(year:number, month:number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993,7,9);
console.log(myDate.printFormat())

myDate.add(3,"days")
console.log(myDate.printFormat());
