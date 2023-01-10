import { Product } from "./models/products.model";
import axios from 'axios';

(async()=> {

  //firmar el retorno
  // async function getProducts():Promise<Product[]> {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products?limit=10&offset=50')
  //   return rta.data;
  // }

  // firmar en el metodo de axios que esta soporta tipados
  //  async function getProducts() {
  //   const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=10&offset=50')
  //   return rta.data;
  // }

  //para las librerias que no soporten tipado se haria de esta forma
  async function getProducts() {
    const {data} = await axios.get('https://api.escuelajs.co/api/v1/products?limit=10&offset=50')
    return data as Product[]
  }

  console.log('-----'.repeat(10))
  const products = await getProducts();

  //al estar tipado como array de productos
  //tengo los metodos de los arrays
  //al iterar tengo las propiedades del tipo Product
  console.log(products.map(item => (`${item.id} ${item.title}`)))



})();
