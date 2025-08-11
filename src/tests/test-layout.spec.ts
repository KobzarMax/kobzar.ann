import { test, expect } from '@playwright/test';

test.describe('Mobile landscape layout', () => {
  test('should not overlap when both images are horizontal', async ({
    page
  }) => {
    // Simulate mobile size
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/test-layout');

    // Wait for images to load
    await page.waitForSelector('img');

    // Take screenshot for visual regression
    expect(await page.screenshot()).toMatchSnapshot(
      'mobile-landscape-layout.png'
    );
  });
});
