import { test } from '@playwright/test';
import { AdminPage } from './pages/AdminPage';

test('Admin can create a new user', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  );

  const adminPage = new AdminPage(page);

  await adminPage.goToAdmin();
  await adminPage.clickAddUser();

  const username = `qa_user_${Date.now()}`;

  await adminPage.createUser({
    employeeName: '', // handled dynamically inside page object
    username,
    password: 'Test@1234',
  });

  await adminPage.expectUserCreationCompleted();
});
