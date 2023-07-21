import { test, expect } from '@playwright/test';

const url = 'https://discover-next-js.vercel.app/posts/create';
const expectedUrl = 'https://discover-next-js.vercel.app/posts';

test.describe('Create a Post', () => {
  test.beforeEach(async ({ page }) => await page.goto(url));

  test('Valid Post payload', async ({ page }) => {
    await page.getByPlaceholder('Enter the userId').click();
    await page.getByPlaceholder('Enter the userId').fill('1');

    await page.getByPlaceholder('Enter the title').click();
    await page.getByPlaceholder('Enter the title').fill('Example of title');

    await page.getByPlaceholder('Enter the body').click();
    await page.getByPlaceholder('Enter the body').fill('Example of body');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(expectedUrl);
  });

  test('Invalid Post payload', async ({ page }) => {
    await page.getByPlaceholder('Enter the userId').click();
    await page.getByPlaceholder('Enter the userId').fill('1');

    await page.getByPlaceholder('Enter the title').click();
    await page.getByPlaceholder('Enter the title').fill('Passing invalid characters like : <()>)');

    await page.getByPlaceholder('Enter the body').click();
    await page.getByPlaceholder('Enter the body').fill('Passing invalid characters like : <()>)');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(url);
  });
});
