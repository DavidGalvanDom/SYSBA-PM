export class SYSBAPMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sysba-pm-app h1')).getText();
  }
}
