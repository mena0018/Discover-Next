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
    await page.getByPlaceholder('Enter the body').fill('Body with more than 20 characters');

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL(expectedUrl);
  });

  test('Invalid Post payload: Character not authorized ', async ({ page }) => {
    await page.getByPlaceholder('Enter the userId').click();
    await page.getByPlaceholder('Enter the userId').fill('1');

    await page.getByPlaceholder('Enter the title').click();
    await page.getByPlaceholder('Enter the title').fill('Passing invalid characters like : <()>)');

    await page.getByPlaceholder('Enter the body').click();
    await page.getByPlaceholder('Enter the body').fill('Passing invalid characters like : <()>)');

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL(url);
  });

  test('Invalid Post payload: Body < 20 character', async ({ page }) => {
    await page.getByPlaceholder('Enter the userId').click();
    await page.getByPlaceholder('Enter the userId').fill('1');

    await page.getByPlaceholder('Enter the title').click();
    await page.getByPlaceholder('Enter the title').fill('Exemple of title');

    await page.getByPlaceholder('Enter the body').click();
    await page.getByPlaceholder('Enter the body').fill('Example of short body');

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL(url);
  });

  test('Invalid Post payload: Title < 5 character', async ({ page }) => {
    await page.getByPlaceholder('Enter the userId').click();
    await page.getByPlaceholder('Enter the userId').fill('1');

    await page.getByPlaceholder('Enter the title').click();
    await page.getByPlaceholder('Enter the title').fill('Title');

    await page.getByPlaceholder('Enter the body').click();
    await page.getByPlaceholder('Enter the body').fill('Body with more than 20 characters');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(url);
  });
});
