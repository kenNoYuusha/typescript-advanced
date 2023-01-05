class MyDate {
  //debemos tipar nuestros atributos
  year: number;
  month: number;
  day: number;
  //tipamos el constructor
  constructor(year:number, month:number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  //este metodo es a forma de prueba, es ineficiente para sumar dias a fechas
  //lo interesante aqui es el literal type 'day' | 'months' | 'yeras'
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

const myDate = new MyDate(1993,7,9);
console.log(myDate.printFormat())
//al moment de llamar el metodo add solo te deja elegir entre sus 3 literals.
myDate.add(3,"days")
console.log(myDate.printFormat());
