import { SYSBAPMPage } from './app.po';

describe('sysba-pm App', function() {
  let page: SYSBAPMPage;

  beforeEach(() => {
    page = new SYSBAPMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sysba-pm works!');
  });
});
