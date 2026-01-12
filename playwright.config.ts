import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'admin-tests',
      testMatch: /.*\.spec\.ts/,
      use: {
        storageState: 'storage/admin.json',
      },
      dependencies: ['setup'],
    },
  ],
});
