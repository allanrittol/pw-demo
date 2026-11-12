import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  abstract get url(): string;

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  // Override per page with the element that proves it is usable.
  abstract waitUntilLoaded(): Promise<void>;

  get header(): Locator {
    return this.page.getByRole('banner');
  }

  get footer(): Locator {
    return this.page.getByRole('contentinfo');
  }
}