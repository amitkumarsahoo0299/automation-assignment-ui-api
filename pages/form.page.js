const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;
  }

  async fillMandatoryDetails(name) {
    await this.page.fill('#formName', name);
    await this.page.click('button#createForm');
    await expect(this.page.locator('text=Form created successfully')).toBeVisible();
  }

  async addTextboxAndFileUpload() {
    await this.page.dragAndDrop('text=Textbox', '#canvas');
    await this.page.dragAndDrop('text=Select File', '#canvas');
  }

  async interactWithTextboxAndUpload(text, filePath) {
    await this.page.fill('#textboxInput', text);
    await expect(this.page.locator('#textboxInput')).toHaveValue(text);

    await this.page.setInputFiles('#fileUpload', filePath);
    await expect(this.page.locator('text=Upload successful')).toBeVisible();
  }

  async saveForm() {
    await this.page.click('button#saveForm');
    await expect(this.page.locator('text=Form saved')).toBeVisible();
  }
}

module.exports = { FormPage };