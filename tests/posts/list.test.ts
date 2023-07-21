import { test, expect } from '@playwright/test';

const url = 'https://discover-next-js.vercel.app/posts';

test.describe('List of Posts', () => {
  test.beforeEach(async ({ page }) => await page.goto(url));

  test.describe('Testing posts list', () => {
    test('Check href attribute', async ({ page }) => {
      const firstLink = page.locator('text=detail').first();
      await expect(firstLink).toHaveAttribute('href', '/posts/1');
    });
  });

  test.describe('Testing the post n°2', () => {
    test.beforeEach(async ({ page }) => await page.goto(`${url}/2`));

    test('Check URL', async ({ page }) => await expect(page).toHaveURL(/2/));

    test('Check detail page content', async ({ page }) => {
      await expect(page.locator('text=Post n°')).toBeVisible();
      await expect(page.locator('text=written by')).toBeVisible();
      await expect(page.locator('text=qui est esse')).toBeVisible();
      await expect(page.locator('text=Go Back')).toBeVisible();
    });

    test('Check the author', async ({ page }) => {
      await page.getByRole('link', { name: 'written by' }).click();

      await expect(page.locator('text=Leanne Graham')).toBeVisible();
      await expect(page.locator('text=Romaguera-Crona')).toBeVisible();
      await expect(page.locator('text=hildegard.org')).toBeVisible();
      await expect(page.locator('text=Sincere@april.biz')).toBeVisible();
      await expect(page.locator('text=Go Back')).toBeVisible();
    });
  });

  test.describe('Testing the post n°20', () => {
    test.beforeEach(async ({ page }) => await page.goto(`${url}/20`));

    test('Check URL', async ({ page }) => await expect(page).toHaveURL(/20/));

    test('Check detail page content', async ({ page }) => {
      await expect(page.locator('text=Post n°')).toBeVisible();
      await expect(page.locator('text=written by')).toBeVisible();
      await expect(page.locator('text=doloribus ad provident suscipit at')).toBeVisible();
      await expect(page.locator('text=Go Back')).toBeVisible();
    });

    test('Check the author', async ({ page }) => {
      await page.getByRole('link', { name: 'written by' }).click();

      await expect(page.locator('text=Ervin Howell')).toBeVisible();
      await expect(page.locator('text=Deckow-Crist')).toBeVisible();
      await expect(page.locator('text=anastasia.net')).toBeVisible();
      await expect(page.locator('text=Shanna@melissa.tv')).toBeVisible();
      await expect(page.locator('text=Go Back')).toBeVisible();
    });
  });
});
