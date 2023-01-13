import axios from 'axios';
import { Product } from '../models/product.model';
import { CreateProductDto, updateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductHttpService implements ProductService {

  private static instance: ProductHttpService | null = null;
  private constructor(private url:string){
    //empty
  }

  static createInstance(): ProductHttpService {
    if(ProductHttpService.instance === null) {
      ProductHttpService.instance = new ProductHttpService("https://api.escuelajs.co/api/v1/products")
    }
    return ProductHttpService.instance
  }

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }
  async update(id: number, changes: updateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
  async findOne(id: number) {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }
}
