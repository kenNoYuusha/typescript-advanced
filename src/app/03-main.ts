import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productHttpService = ProductHttpService.createInstance();

  try {
    console.log('-----'.repeat(10), 'Creating product');
    const productCreated = await productHttpService.create({
      title: 'Product5',
      price: 3500,
      description: 'Description of product 1',
      images: ['image105.jpg', 'image107.jpg'],
      categoryId: 1,
    });
    console.log('productCreated', productCreated);

    console.log('-----'.repeat(10), 'Updating product');
    const productUpdated = await productHttpService.update(productCreated.id, {
      description: "singleton applied",
      price: 10000,
    });
    console.log('productUpdated', productUpdated);

    console.log('-----'.repeat(10), 'Finding product');
    const product = await productHttpService.findOne(productUpdated.id);
    console.log('productFinded', product);
  } catch (error) {
    console.log("Try catch Error", error)
  }
})();
