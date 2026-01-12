import { test, expect } from '@playwright/test';

test('Admin dashboard loads for authenticated user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Assert correct page
  await expect(page).toHaveURL(/dashboard/);

  // Assert dashboard widget exists
  await expect(
    page.getByText('Time at Work')
  ).toBeVisible();
});
