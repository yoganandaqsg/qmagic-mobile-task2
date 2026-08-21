import { pageFixture } from '../../../hooks/pageFixture';
import { uiActions } from '../../../utils/mobileUtils/actions/uiActions';

export class ApiDemosHomePage extends uiActions {
  // Locators
  private async menuItem(menuName: string) {
    const page = pageFixture.page;
    if (!page) {
      throw new Error('Session is not initialized.');
    }
    return page.$(`~${menuName}`);
  }

  // Actions
  async navigateToMenu(menuName: string): Promise<void> {
    const menu = await this.menuItem(menuName);
    await this.clickElement(menu);
  }

  // Asserts
  async assertMenuVisible(menuName: string): Promise<void> {
    const menu = await this.menuItem(menuName);
    await this.waitForElement(menu);
  }
}

export const apiDemosHomePage = new ApiDemosHomePage();
