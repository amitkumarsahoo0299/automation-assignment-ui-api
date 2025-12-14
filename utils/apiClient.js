const { request, expect } = require('@playwright/test');
require('dotenv').config();

async function createLearningInstance() {
  const context = await request.newContext({
    baseURL: 'https://www.automationanywhere.com/api', //This is my assumed API base URL due to signing up issue 
  });

  
  const loginResponse = await context.post('/login', {
    data: { username: process.env.USERNAME, password: process.env.PASSWORD },
  });
  expect(loginResponse.status()).toBe(200);

  const token = (await loginResponse.json()).token;

  
  const createResponse = await context.post('/learning/instances', {
    headers: { Authorization: `Bearer ${token}` },
    data: { name: 'MyLearningInstance', type: 'AI' },
  });

  expect(createResponse.status()).toBe(201);
  const body = await createResponse.json();

  expect(body).toHaveProperty('id');
  expect(body.name).toBe('MyLearningInstance');
  expect(body.status).toBe('Created');

  return body;
}

module.exports = { createLearningInstance };