import { Product } from "./models/product.model";
import axios from 'axios';

(async()=> {

  //firmar el retorno
  //desventaja que solo se tipar el return, internametne sigue con typo any
  // async function getProducts():Promise<Product[]> {
  //   const { data } = await axios.get('https://api.escuelajs.co/api/v1/products?limit=10&offset=50')
  //   return data;
  // }

  //firmar en el metodo de axios que esta soporta tipados
  //nos permite manipular por dentro de la funcion antes de retornar el resultado
   async function getProducts() {
    const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=20&offset=0')
    const data = rta.data.filter(item => item.id >= 17 && item.id <= 22)
    return data;
  }

  //para las librerias que no soporten tipado se haria de esta forma
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products?limit=10&offset=0')
  //   const data = rta.data as Product[]
  //   return data;
  // }

  console.log('-----'.repeat(10))
  const products = await getProducts();

  //al estar tipado como array de productos
  //tengo los metodos de los arrays
  //al iterar tengo las propiedades del tipo Product
  console.log(products.map(item => (`${item.id} ${item.title}`)))


})();
