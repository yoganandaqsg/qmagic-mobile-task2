import { pageFixture } from '../../../hooks/pageFixture';
import { uiActions } from '../../../utils/mobileUtils/actions/uiActions';

export class LogTextBoxPage extends uiActions {
  // Locators
  private async addButton() {
    const page = pageFixture.page;
    if (!page) {
      throw new Error('Session is not initialized.');
    }
    return page.$('id=io.appium.android.apis:id/add');
  }

  private async logMessageText() {
    const page = pageFixture.page;
    if (!page) {
      throw new Error('Session is not initialized.');
    }
    return page.$('id=io.appium.android.apis:id/text');
  }

  // Actions
  async clickButton(buttonName: string): Promise<void> {
    if (buttonName.trim().toUpperCase() !== 'ADD') {
      throw new Error(`Unsupported button name: ${buttonName}`);
    }
    const add = await this.addButton();
    await this.clickElement(add);
  }

  // Asserts
  async assertMessageDisplayed(expectedMessage: string): Promise<void> {
    const message = await this.logMessageText();
    await this.waitForElement(message);

    const actualText = (await message.getText()).trim().toLowerCase();
    const normalizedExpected = expectedMessage.trim().toLowerCase();

    if (actualText !== normalizedExpected) {
      throw new Error(
        `Assertion failed. Expected "${normalizedExpected}", found "${actualText}".`
      );
    }
  }
}

export const logTextBoxPage = new LogTextBoxPage();
