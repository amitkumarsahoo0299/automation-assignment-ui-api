const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { AutomationPage } = require('../../pages/automation.page');
const { TaskBotPage } = require('../../pages/TaskBot.page');

test('Create Message Box Task', async ({ page }) => {
  const login = new LoginPage(page);
  const automation = new AutomationPage(page);
  const taskBot = new TaskBotPage(page);

  await login.goto();
  await login.login(process.env.USERNAME, process.env.PASSWORD);

  await automation.navigateToAutomation();
  await automation.selectCreateOption('Task Bot');

  await taskBot.fillMandatoryDetails('MyMessageTask');
  await taskBot.addMessageBox('Hello Automation!');
  await taskBot.saveConfiguration();
});