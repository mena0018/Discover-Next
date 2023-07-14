import { test, expect } from '@playwright/test';

test.describe('Go to the URL', () => {
  test.beforeEach(async ({ page }) => await page.goto('https://discover-next-js.vercel.app/users'));

  test('user detail page first link', async ({ page }) => {
    const firstLink = page.locator('text=detail').first();
    await expect(firstLink).toHaveAttribute('href', '/users/1');
  });

  test.describe('navigation on the first user detail page', () => {
    test.beforeEach(async ({ page }) => {
      const firstLink = page.locator('text=detail').first();
      await firstLink.click();
    });

    test('user detail page URL', async ({ page }) => await expect(page).toHaveURL(/1/));

    test('user detail page content', async ({ page }) => {
      await expect(page.locator('text=Leanne Graham')).toBeVisible();
      await expect(page.locator('text=Romaguera-Crona')).toBeVisible();
      await expect(page.locator('text=hildegard.org')).toBeVisible();
      await expect(page.locator('text=Sincere@april.biz')).toBeVisible();
    });

    test('go back button', async ({ page }) =>
      await expect(page.locator('text=Go Back')).toBeVisible());
  });
});
