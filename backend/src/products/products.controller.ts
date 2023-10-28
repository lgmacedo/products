import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { NewProductDTO } from './dtos/new-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {};

    @Post()
    postNewProduct(@Body() newProductDTO: NewProductDTO){
        return this.productsService.postNew(newProductDTO);
    }

    @Get()
    getAllProducts(){
        return this.productsService.getAll();
    };
}
