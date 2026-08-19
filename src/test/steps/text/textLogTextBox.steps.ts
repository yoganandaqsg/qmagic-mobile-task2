import { Given, Then, When } from '@cucumber/cucumber';
import { logTextBoxPage } from '../../pages/text/LogTextBoxPage';
import { textMenuPage } from '../../pages/text/TextMenuPage';

Given(
  'the user navigates to the {string} screen from the {string} menu',
  async function (targetScreen: string, sourceMenu: string) {
    if (sourceMenu !== 'Text') {
      throw new Error(`Unsupported source menu: ${sourceMenu}.`);
    }

    await textMenuPage.navigateToScreenFromTextMenu(targetScreen);
  }
);

When('the user clicks on the {string} button', async function (buttonName: string) {
  if (buttonName !== 'ADD') {
    throw new Error(`Unsupported button name: ${buttonName}.`);
  }

  await logTextBoxPage.tapAddButton();
});

Then('the {string} message is displayed', async function (expectedMessage: string) {
  await logTextBoxPage.assertLogMessageDisplayed(expectedMessage);
});

Then('no log message is displayed', async function () {
  await logTextBoxPage.assertNoLogMessageIsDisplayed();
});
