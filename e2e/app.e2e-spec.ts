import { AthenaInsightsPage } from './app.po';

describe('athena-insights App', function() {
  let page: AthenaInsightsPage;

  beforeEach(() => {
    page = new AthenaInsightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
