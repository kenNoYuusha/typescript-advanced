export class MyDate {
  //cambia el acceso de un atributo a privado
  private year: number;
  private month: number;
  private day: number;
  constructor(year:number, month:number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat():string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPading(value:number):string {
    if(value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  getDay():number {
    return this.day;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
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
const myDate = new MyDate(1993,7,10);
//al ser privado no tendra acceso desde afuera
//--> console.log('diaPrivado', myDate.day)


console.log(myDate.printFormat());
console.log(myDate.getDay());

