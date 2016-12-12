import { AngularFormBuilderPage } from './app.po';

describe('angular-form-builder App', function() {
  let page: AngularFormBuilderPage;

  beforeEach(() => {
    page = new AngularFormBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
