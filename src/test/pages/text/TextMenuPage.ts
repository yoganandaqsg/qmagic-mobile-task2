import { pageFixture } from '../../../hooks/pageFixture';
import { uiActions } from '../../../utils/mobileUtils/actions/uiActions';

export class TextMenuPage extends uiActions {
  // Locators
  private async screenOption(screenName: string) {
    const page = pageFixture.page;
    if (!page) {
      throw new Error('Session is not initialized.');
    }
    return page.$(`~${screenName}`);
  }

  // Actions
  async openScreen(screenName: string): Promise<void> {
    const screen = await this.screenOption(screenName);
    await this.clickElement(screen);
  }

  // Asserts
  async assertScreenOptionVisible(screenName: string): Promise<void> {
    const screen = await this.screenOption(screenName);
    await this.waitForElement(screen);
  }
}

export const textMenuPage = new TextMenuPage();
