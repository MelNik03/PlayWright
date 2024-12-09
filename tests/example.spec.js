const { test, expect } = require('@playwright/test');

test('Basic Test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});