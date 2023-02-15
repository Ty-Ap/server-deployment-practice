'use strict';

const {app} = require('../src/server');
const supertest = require('supertest');
const {sequelizeDatabase} = require('../src/models');
const request = supertest(app);

beforeAll(async () =>{
  await sequelizeDatabase.sync();

});

afterAll(async () =>{
  await sequelizeDatabase.drop();
});

describe('REST API', ()=> {
  it('creates a customer', async ()=>{
    let response = await request.post('/customer').send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.pronouns).toEqual('they/them');
    expect(response.body.id).toBeTruthy();
  });
});
