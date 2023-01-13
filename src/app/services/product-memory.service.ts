import { faker } from '@faker-js/faker';
import { Product } from "../models/product.model"
import { CreateProductDto, updateProductDto } from "../dtos/product.dto";
import { ProductService } from '../models/product-service.model';


export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll(){
    return this.products;
  }

  create(data:CreateProductDto): Product {
    const {categoryId, ...rest} = data
    const newProduct = {
      ...rest,
      id: faker.datatype.number(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: categoryId,
        name: faker.commerce.department(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        image: faker.image.imageUrl(),
      },
    }

    return this.add(newProduct);
  }

  private add(product: Product){
    this.products.push(product);
    return product
  }

  update(id:Product["id"], changes: updateProductDto): Product {
    const index = this.products.findIndex(product => product.id === id)
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne(id:Product["id"]){
    return this.products.find(product => product.id === id)
  }

}









