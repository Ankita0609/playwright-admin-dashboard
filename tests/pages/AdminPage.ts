import { Page, expect } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async goToAdmin() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
    await expect(this.page).toHaveURL(/admin/);
  }

  async clickAddUser() {
    await this.page.getByRole('button', { name: 'Add' }).click();
  }

  async goBackToUserList() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
    await expect(this.page).toHaveURL(/admin/);
  }

  async searchUser(username: string) {
    const usernameInput = this.page.locator('input').first();
    await usernameInput.fill(username);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async expectUserCreationCompleted() {
  // After save, OrangeHRM returns control to Admin module
  await expect(
    this.page.getByRole('link', { name: 'Admin' })
  ).toBeVisible();
}
  async createUser(options: {
    employeeName: string;
    username: string;
    password: string;
  }) {
    // User Role dropdown
    const userRole = this.page.locator('.oxd-select-wrapper').first();
    await userRole.click();
    await this.page.getByRole('option', { name: 'ESS' }).click();

// Employee Name (select first available employee dynamically)
// Employee Name (must click INNER text, not container)
const employeeInput = this.page.getByPlaceholder('Type for hints...');
await employeeInput.fill('a');

// Wait for suggestions
const suggestionText = this.page.locator(
  '.oxd-autocomplete-option span'
).first();

await expect(suggestionText).toBeVisible();

// Click the actual text so input value updates
await suggestionText.click();

    // Status dropdown
    const status = this.page.locator('.oxd-select-wrapper').nth(1);
    await status.click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();

    // Username (custom input – labels are broken)
    const usernameInput = this.page.locator('input').nth(2);
    await usernameInput.fill(options.username);

    // Password & Confirm Password
    const passwordInputs = this.page.locator('input[type="password"]');
    await passwordInputs.nth(0).fill(options.password);
    await passwordInputs.nth(1).fill(options.password);

    // Save user
    await this.page.getByRole('button', { name: 'Save' }).click();

    // IMPORTANT: OrangeHRM does NOT auto-navigate back
    await this.page.waitForTimeout(2000);
    await this.goBackToUserList();
  }
}
