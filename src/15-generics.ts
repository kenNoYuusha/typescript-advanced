// //forma simple por si queremos algun tipo de dinamismo podria ser una opcion usar union types.
// function getValue1(value: number | string) {
//   return value;
// }
// //otra forma seria usar unknow y luego inferir el tipo a la hora de usarlo.
// function getValue2(value: unknown){
//   return value;
// }

import { Dog } from "./08-inheritance";
import { Product } from "./app/models/product.model";
//sintaxis como se define una funcion con generics
function getValue<T>(value:T){
  return value;
}
//al momento de ejecutar infiere el dato y tambien se puede poner de forma explicita
//forma implicita

const rta = getValue("tiburoncion ujaja").toUpperCase();
console.log(rta);

const rta2 = getValue(105.457).toString();
console.log(rta2)

//forma explicita
const rta3 = getValue<string>("Perry el ornitorrinco").toUpperCase();
console.log(rta3);

const rta4 = getValue<number>(10.4512).toFixed();
console.log(rta4);

const rta5 = getValue<Product>({
  id: 5,
  title: "something",
  price: 2000,
  description: "some description",
  images: [],
  category : {
    id: 1,
    name: "clothes",
    image: "category.jpg",
    creationAt: new Date(),
    updatedAt: new Date(),
  },
  creationAt: new Date(),
  updatedAt: new Date(),
}).description

console.log(rta5)

const rta6 = getValue<string[]>(["manzana", "pera", "uvas"]).filter(item => item.includes("u"))
console.log(rta6)

const dog = new Dog("fifi","Luis")
const rta7 = getValue<Dog>(dog).bark(10)

//----------- se puede enviar mas de 1 tipo como parametro

function getValue2<T,T2,T3>(value:T){
  let value2:T2 | undefined;
}

