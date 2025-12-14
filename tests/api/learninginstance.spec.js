const { test } = require('@playwright/test');
const { createLearningInstance } = require('../../utils/apiClient');

test('Create Learning Instance via API', async () => {
  const instance = await createLearningInstance(process.env.USERNAME, process.env.PASSWORD);
  console.log('Learning Instance Created:', instance);
});