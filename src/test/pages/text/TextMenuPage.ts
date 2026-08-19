import { pageFixture } from '../../../hooks/pageFixture';
import { uiActions } from '../../../utils/mobileUtils/actions/uiActions';

export class TextMenuPage {
  private readonly actions = new uiActions();

  private menuItemByName(menuName: string) {
    return pageFixture.page!.$(`~${menuName}`);
  }

  async navigateToScreenFromTextMenu(targetScreen: string): Promise<void> {
    await this.actions.clickElement(this.menuItemByName('Text'));
    await this.actions.clickElement(this.menuItemByName(targetScreen));
  }
}

export const textMenuPage = new TextMenuPage();
