import { ChronosPage } from './app.po';

describe('chronos App', () => {
  let page: ChronosPage;

  beforeEach(() => {
    page = new ChronosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
