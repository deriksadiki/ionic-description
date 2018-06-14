import { IonicDescriptionPage } from './app.po';

describe('ionic-description App', function() {
  let page: IonicDescriptionPage;

  beforeEach(() => {
    page = new IonicDescriptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
