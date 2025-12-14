const { expect } = require('@playwright/test');

class TaskBotPage {
  constructor(page) {
    this.page = page;
  }

  async fillMandatoryDetails(name) {
    await this.page.fill('#taskName', name);
    await this.page.click('button#createTask');
    await expect(this.page.locator('text=Task created successfully')).toBeVisible();
  }

  async addMessageBox(message) {
    await this.page.fill('input[placeholder="Search Actions"]', 'Message Box');
    await this.page.dblclick('text=Message Box');
    await this.page.fill('#messageText', message);
    await expect(this.page.locator('#messageText')).toHaveValue(message);
  }

  async saveConfiguration() {
    await this.page.click('button#saveConfig');
    await expect(this.page.locator('text=Configuration saved')).toBeVisible();
  }
}

module.exports = { TaskBotPage };