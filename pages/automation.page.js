class AutomationPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToAutomation() {
    await this.page.click('text=Automation');
  }

  async selectCreateOption(option) {
    await this.page.click('text=Create');
    await this.page.click(`text=${option}`);
  }
}

module.exports = { AutomationPage };