import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Logger, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
  
@Controller('books')
export class BooksController {
  @Get('example-get')
  @HttpCode(200)
  getBooks() {
    return { nombre: 'get' };
  }
  @Get(':bookId')
  @HttpCode(200)
  getBook() {
    return `queryEjemploGet`;
  }
  @Post('example-post')
  @HttpCode(201)
  postBook() {
    return { nombre: 'post' };
  }
  @Put('example-put')
  @HttpCode(201)
  putBook() {
    return { nombre: 'put' };
  }
  @Delete('example-delete')
  @HttpCode(200)
  deleteBook() {
    return { nombre: 'delete' };
  }
}
  

    
   
