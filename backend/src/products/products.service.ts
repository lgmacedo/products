import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { NewProductDTO } from './dtos/new-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async postNew(product: NewProductDTO) {
    return this.productsRepository.createNew(product);
  }

  async getAll() {
    const products = await this.productsRepository.findAll();
    const processedProducts = products.map((p) => {
      const type = p.category.name;
      const promotionalPrice = Math.floor(
        p.price - p.category.discount * 0.01 * p.price,
      );
      delete p.category;
      return {
        ...p,
        type,
        promotionalPrice,
      };
    });

    return processedProducts;
  }
}
