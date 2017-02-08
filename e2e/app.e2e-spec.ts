import { Angular2practicePage } from './app.po';

describe('angular2practice App', function() {
  let page: Angular2practicePage;

  beforeEach(() => {
    page = new Angular2practicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
