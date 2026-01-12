import { test as setup, expect } from '@playwright/test';

setup('Authenticate admin user', async ({ page }) => {
  // Use domcontentloaded instead of load (OrangeHRM load event is unreliable)
  await page.goto('https://opensource-demo.orangehrmlive.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // Ensure login form is ready
  await expect(page.getByPlaceholder('Username')).toBeVisible();

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);

  // Save authenticated state
  await page.context().storageState({ path: 'storage/admin.json' });
});
