import { test, expect } from '@playwright/test';

const url = 'https://discover-next-js.vercel.app/users';

test.describe('List of Users', () => {
  test.beforeEach(async ({ page }) => await page.goto(url));

  test.describe('Testing users list', () => {
    test('Check href attribute', async ({ page }) => {
      const firstLink = page.locator('text=detail').first();
      await expect(firstLink).toHaveAttribute('href', '/users/1');
    });
  });

  test.describe('Testing the user n°1', () => {
    test.beforeEach(async ({ page }) => await page.goto(`${url}/1`));

    test('Check URL', async ({ page }) => await expect(page).toHaveURL(/1/));

    test('Check detail page content', async ({ page }) => {
      await expect(page.locator('text=Leanne Graham')).toBeVisible();
      await expect(page.locator('text=Romaguera-Crona')).toBeVisible();
      await expect(page.locator('text=hildegard.org')).toBeVisible();
      await expect(page.locator('text=Sincere@april.biz')).toBeVisible();
      await expect(page.locator('text=Go Back')).toBeVisible();
    });
  });

  test.describe('Testing the user n°2', () => {
    test.beforeEach(async ({ page }) => await page.goto(`${url}/2`));

    test('Check URL', async ({ page }) => await expect(page).toHaveURL(/2/));

    test('Check detail page content', async ({ page }) => {
      await expect(page.locator('text=Ervin Howell')).toBeVisible();
      await expect(page.locator('text=Deckow-Crist')).toBeVisible();
      await expect(page.locator('text=anastasia.net')).toBeVisible();
      await expect(page.locator('text=Shanna@melissa.tv')).toBeVisible();
      await expect(page.locator('text=Go Back')).toBeVisible();
    });
  });
});
