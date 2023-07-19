import { test, expect } from '@playwright/test';

const url = 'https://discover-next-js.vercel.app/posts/create';
const expectedUrl = 'https://discover-next-js.vercel.app/posts';

test('adding a user', async ({ page }) => {
  await page.goto(url);

  await page.getByPlaceholder('Enter your title').click();
  await page.getByPlaceholder('Enter your title').fill('Example of title');

  await page.getByPlaceholder('Enter the userId').click();
  await page.getByPlaceholder('Enter the userId').fill('1');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(expectedUrl);
});
