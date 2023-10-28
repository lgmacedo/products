import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('ProductsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer()).get(`/products`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
          color: expect.any(String),
          price: expect.any(Number),
          type: expect.any(String),
          promotionalPrice: expect.any(Number),
        }),
      ]),
    );
  });

  it('/ (POST)', async () => {
    const response = await request(app.getHttpServer()).post(`/products`).send({
        name: 'MacBook Air',
        description: '15 inch Macbook Air with TouchBar',
        color: 'Space Gray',
        price: 989900,
        categoryId: 5,
    });
    expect(response.statusCode).toBe(201);
  });
});
