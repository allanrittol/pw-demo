// tests/pages/HomePage.ts
import { Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  get url(): string {
    return 'https://foreverdesigns.co.ke/';
  }

  get mainHeading(): Locator {
    return this.page.getByRole('heading', { level: 1 });
  }

  get navLinks(): Locator {
    return this.page.getByRole('navigation').getByRole('link');
  }

  ctaLink(name: string | RegExp): Locator {
    return this.page.getByRole('link', { name }).first();
  }

  async waitUntilLoaded(): Promise<void> {
    await expect(this.mainHeading).toBeVisible();
  }

  async clickCta(name: string | RegExp): Promise<void> {
    await this.ctaLink(name).click();
  }
}