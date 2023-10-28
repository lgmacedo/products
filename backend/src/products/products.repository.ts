import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NewProductDTO } from './dtos/new-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createNew(product: NewProductDTO) {
    return await this.prisma.product.create({
      data: product,
    });
  }

  async findAll() {
    return await this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        color: true,
        price: true,
        category: {
          select: {
            name: true,
            discount: true,
          },
        },
      },
    });
  }
}
