import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productHttpService = new ProductHttpService();

  try {
    console.log('-----'.repeat(10), 'Creating product');
    const productCreated = await productHttpService.create({
      title: 'Product1',
      price: 2750,
      description: 'Description of product 1',
      images: ['image1.jpg', 'image2.jpg'],
      categoryId: 1,
    });
    console.log('productCreated', productCreated);

    console.log('-----'.repeat(10), 'Updating product');
    const productUpdated = await productHttpService.update(productCreated.id, {
      description: "one of the best product I've ever seen",
      price: 5000,
    });
    console.log('productUpdated', productUpdated);

    console.log('-----'.repeat(10), 'Finding product');
    const product = await productHttpService.findOne(productUpdated.id);
    console.log('productFinded', product);
  } catch (error) {
    console.log("Try catch Error", error)
  }
})();
