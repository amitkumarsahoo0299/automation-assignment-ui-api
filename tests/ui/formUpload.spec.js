const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { AutomationPage } = require('../../pages/automation.page');
const { FormPage } = require('../../pages/form.page');

test('Form with Textbox and File Upload', async ({ page }) => {
  const login = new LoginPage(page);
  const automation = new AutomationPage(page);
  const form = new FormPage(page);

  await login.goto();
  await login.login(process.env.USERNAME, process.env.PASSWORD);

  await automation.navigateToAutomation();
  await automation.selectCreateOption('Form');

  await form.fillMandatoryDetails('MyForm');
  await form.addTextboxAndFileUpload();
  await form.interactWithTextboxAndUpload('Test Input', 'tests/resources/sample.pdf');
  await form.saveForm();
});