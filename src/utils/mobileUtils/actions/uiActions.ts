import { setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from '../../../hooks/pageFixture';

type MobileElement = {
  waitForDisplayed(options?: { timeout?: number }): Promise<void>;
  click(): Promise<void>;
  isDisplayed(): Promise<boolean>;
  getText(): Promise<string>;
};

export class uiActions {
  private readonly defaultTimeout: number;

  constructor(defaultTimeout: number = 30000) {
    this.defaultTimeout = defaultTimeout;
  }

  async defaultTimeOut(): Promise<void> {
    setDefaultTimeout(this.defaultTimeout);
  }

  async waitForElement(locator: MobileElement): Promise<void> {
    await locator.waitForDisplayed({
      timeout: this.defaultTimeout,
    });
  }

  async clickElement(locator: MobileElement): Promise<void> {
    await this.waitForElement(locator);
    await locator.click();
  }

  async scrollToElement(locator: MobileElement): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < this.defaultTimeout) {
      if (await locator.isDisplayed()) {
        return;
      }
      await this.swipeUp();
      await pageFixture.page?.pause(400);
    }
    throw new Error('Element was not visible after scrolling.');
  }

  async assertElementText(
    locator: MobileElement,
    expectedText: string
  ): Promise<void> {
    await this.waitForElement(locator);
    const actualText = (await locator.getText()).trim();
    if (actualText !== expectedText) {
      throw new Error(
        `Assertion failed. Expected "${expectedText}", found "${actualText}".`
      );
    }
  }

  private async swipeUp(): Promise<void> {
    const page = pageFixture.page;
    if (!page) {
      throw new Error('Session is not initialized.');
    }

    const windowSize = await page.getWindowRect();
    const startX = windowSize.width / 2;
    const startY = windowSize.height * 0.7;
    const endY = windowSize.height * 0.3;

    await page.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y: startY },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 500, x: startX, y: endY },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

    await page.releaseActions();
  }
}
