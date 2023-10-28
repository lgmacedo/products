import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.productCategories.findMany({
      select: {
        id: true,
        name: true,
        discount: false,
        products: false,
      },
    });
  }
}
