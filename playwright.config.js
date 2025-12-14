require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://www.automationanywhere.com/products/enterprise/community-edition',
    headless: false,
  },
  reporter: [['html', { outputFolder: 'report' }]],
  globalSetup: './utils/globalSetup.js'
});