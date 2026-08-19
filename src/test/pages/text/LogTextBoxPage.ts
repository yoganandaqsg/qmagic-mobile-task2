import { pageFixture } from '../../../hooks/pageFixture';
import { uiActions } from '../../../utils/mobileUtils/actions/uiActions';

export class LogTextBoxPage {
  private readonly actions = new uiActions();

  private get addButton() {
    return pageFixture.page!.$('id=io.appium.android.apis:id/add');
  }

  private get logMessage() {
    return pageFixture.page!.$('id=io.appium.android.apis:id/text');
  }

  async tapAddButton(): Promise<void> {
    await this.actions.clickElement(this.addButton);
  }

  async assertLogMessageDisplayed(expectedMessage: string): Promise<void> {
    await this.actions.waitForElement(this.logMessage);

    const actualMessage = (await this.logMessage.getText()).trim().toLowerCase();
    const normalizedExpected = expectedMessage.trim().toLowerCase();

    if (actualMessage !== normalizedExpected) {
      throw new Error(
        `Assertion failed. Expected "${expectedMessage}", found "${actualMessage}".`
      );
    }
  }

  async assertNoLogMessageIsDisplayed(): Promise<void> {
    await this.actions.waitForElement(this.logMessage);
    const actualMessage = (await this.logMessage.getText()).trim();

    if (actualMessage.length > 0) {
      throw new Error(
        `Assertion failed. Expected no message before clicking ADD, found "${actualMessage}".`
      );
    }
  }
}

export const logTextBoxPage = new LogTextBoxPage();
