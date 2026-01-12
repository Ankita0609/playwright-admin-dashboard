import { test, expect } from '@playwright/test';
import { AdminPage } from './pages/AdminPage';

test('Admin can search for existing user', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  );

  const adminPage = new AdminPage(page);

  await adminPage.goToAdmin();
  await adminPage.searchUser('Admin');

  const rows = page.getByRole('row');
  await expect(rows.first()).toBeVisible();
});
