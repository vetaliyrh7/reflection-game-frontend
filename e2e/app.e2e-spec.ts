import { ReflectionGameAppPage } from './app.po';

describe('reflection-game-app App', () => {
  let page: ReflectionGameAppPage;

  beforeEach(() => {
    page = new ReflectionGameAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
