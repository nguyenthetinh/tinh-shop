import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll(); 
  }

  @Get(':id')
  get(@Param() params) {
    return this.productService.findOne(params.id)
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product)
  }

  @Put(':id')
  update(
    @Param() params,
    @Body() product: Product,
  ) {
    return this.productService.update(params.id, product)
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.productService.delete(params.id)
  }
}
