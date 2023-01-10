import axios from 'axios';

(async()=> {

  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time)
    })
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products?limit=10&offset=0')
    return rta.data;
  }



  console.log('-----'.repeat(10))
  const rta = await delay(3000);
  console.log(rta)

  console.log('-----'.repeat(10))
  const products = await getProductsAsync();
  console.log(products);


})();
