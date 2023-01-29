import { test, expect } from '@playwright/test';

const url = 'https://discover-next-js.vercel.app/users/create';
const expectedUrl = 'https://discover-next-js.vercel.app/users/create?name=John+Doe&tel=99';

test('adding a user', async ({ page }) => {
  await page.goto(url);

  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('John Doe');

  await page.getByPlaceholder('Enter your phone number').click();
  await page.getByPlaceholder('Enter your phone number').fill('99');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(expectedUrl);
});
