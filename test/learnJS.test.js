import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/v1/learnJS/course/1/detail', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/detail')
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/catelog', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/catelog')
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/words', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/words')
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/homework', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/homework')
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/homework/1', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/homework/1')
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/teams', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/teams')
      .expect(200);
  });
});

describe('PUT /api/v1/learnJS/course/1/teams', () => {
  it('should return json', async () => {
    await request(app)
      .put('/api/v1/learnJS/course/1/teams')
      .send({ teamInfo: '#### test' })
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/sayToMe', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/sayToMe')
      .expect(200);
  });
});

describe('POST /api/v1/learnJS/sayToMe', () => {
  it('should return json', async () => {
    await request(app)
      .post('/api/v1/learnJS/sayToMe')
      .send({ name: 'test', account: 'test', content: 'testcontent' })
      .expect(200);
  });
});

describe('DELETE /api/v1/learnJS/sayToMe', () => {
  it('should return json', async () => {
    await request(app)
      .delete('/api/v1/learnJS/sayToMe')
      .send({ account: 'test' })
      .expect(200);
  });
});

describe('GET /api/v1/learnJS/course/1/studentWorks', () => {
  it('should return json', async () => {
    await request(app)
      .get('/api/v1/learnJS/course/1/studentWorks')
      .expect(200);
  });
});

describe('POST /api/v1/learnJS/course/1/studentWorks', () => {
  it('should return json', async () => {
    await request(app)
      .post('/api/v1/learnJS/course/1/studentWorks')
      .send({ name: 'test', account: 'test', url: 'baidu.com' })
      .expect(200);
  });
});

describe('DELETE /api/v1/learnJS/course/1/studentWorks', () => {
  it('should return json', async () => {
    await request(app)
      .delete('/api/v1/learnJS/course/1/studentWorks')
      .send({ account: 'test' })
      .expect(200);
  });
});
