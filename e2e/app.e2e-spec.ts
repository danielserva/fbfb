import { FbfbPage } from './app.po';

describe('fbfb App', function() {
  let page: FbfbPage;

  beforeEach(() => {
    page = new FbfbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
