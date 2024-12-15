import { test, expect } from '@playwright/test';

test.describe('Ozon Authorization Test', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    // Открываем главную страницу Ozon
    await page.goto('https://www.ozon.ru');
    await page.waitForLoadState('networkidle'); // Ждем полной загрузки страницы

    // Находим кнопку "Войти" и нажимаем
    await page.locator('[data-widget="profileMenuAnonymous"]').click();

    // Ждем появления формы авторизации
    await page.locator('[data-widget="loginContainer"]').waitFor({ state: 'visible' });

    // Вводим номер телефона (замените на тестовый номер)
    await page.locator('[type="tel"]').fill('558166026');

    // Нажимаем "Продолжить"
    await page.locator('[data-widget="button"] >> text=Продолжить').click();

    // Ждем поля ввода кода (замените процесс на тестовый, если есть)
    const codeField = page.locator('[type="password"]');
    await codeField.waitFor({ state: 'visible' });

    // Вводим код авторизации (например, 0000 для тестов)
    await codeField.fill('1234');

    // Подтверждаем
    await page.locator('[data-widget="button"] >> text=Продолжить').click();

    // Проверяем успешную авторизацию
    await page.locator('text=Мой профиль').waitFor({ state: 'visible' });
    expect(await page.locator('text=Мой профиль').isVisible()).toBeTruthy();
  });
});
