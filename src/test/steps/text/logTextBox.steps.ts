import { Given, Then, When } from '@cucumber/cucumber';
import { apiDemosHomePage } from '../../pages/common/ApiDemosHomePage';
import { logTextBoxPage } from '../../pages/text/LogTextBoxPage';
import { textMenuPage } from '../../pages/text/TextMenuPage';

Given(
  'the user navigates to the {string} screen from the {string} menu',
  async function (screenName: string, menuName: string) {
    await apiDemosHomePage.assertMenuVisible(menuName);
    await apiDemosHomePage.navigateToMenu(menuName);
    await textMenuPage.assertScreenOptionVisible(screenName);
    await textMenuPage.openScreen(screenName);
  }
);

When('the user clicks on the {string} button', async function (buttonName: string) {
  await logTextBoxPage.clickButton(buttonName);
});

Then('the {string} message is displayed', async function (message: string) {
  await logTextBoxPage.assertMessageDisplayed(message);
});
