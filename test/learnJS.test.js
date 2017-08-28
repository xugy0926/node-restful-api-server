import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/v1/learnJS/course/1/detail', () => {
  it('should return json', async () => {
    await request(app).get('/api/v1/learnJS/course/1/detail').expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/catelog', () => {
  it('should return json', async () => {
    await request(app).get('/api/v1/learnJS/course/1/catelog').expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/words', () => {
  it('should return json', async () => {
    await request(app).get('/api/v1/learnJS/course/1/words').expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/homework', () => {
  it('should return json', async () => {
    await request(app).get('/api/v1/learnJS/course/1/homework').expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/homework/1', () => {
  it('should return json', async () => {
    await request(app).get('/api/v1/learnJS/course/1/homework/1').expect(200);
  });
});
