import { CreateProductDto, updateProductDto } from '../dtos/product.dto';
import { Product } from './product.model';

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  create(dto: CreateProductDto): Product | Promise<Product>;
  update(
    id: Product['id'],
    changes: updateProductDto
  ): Product | Promise<Product>;
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>;
}
