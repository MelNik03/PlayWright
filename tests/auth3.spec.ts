import { test, expect } from '@playwright/test';

test('Регистрация/Авторизация на Ozon.ru до ввода кода подтверждения', async ({ page }) => {
  // Переход на главную страницу Ozon
  await page.goto('https://www.ozon.ru/');

  // Ожидание загрузки страницы и доступ к iframe с формой авторизации
  const authIframe = page.frameLocator('iframe[title="Форма авторизации"]');

  // Ожидание кнопки "Войти" внутри iframe
  const loginButton = authIframe.locator('text=Войти');
  await loginButton.waitFor(); // Ждем, пока элемент станет доступным
  await loginButton.click();

  // Ожидание появления поля ввода номера телефона
  const phoneInput = authIframe.locator('input[type="tel"]');
  await phoneInput.waitFor(); // Ждем, пока поле станет доступным
  await phoneInput.fill('+7 123 456-78-90'); // Заполняем номер телефона

  // Клик по кнопке "Получить код"
  const getCodeButton = authIframe.locator('button:has-text("Получить код")');
  await getCodeButton.waitFor(); // Ждем, пока кнопка станет доступной
  await getCodeButton.click();

  // Ожидание появления поля ввода кода подтверждения
  const codeInput = authIframe.locator('input[aria-label="Код из SMS"]');
  await codeInput.waitFor(); // Проверяем, что элемент отображается

  // Проверяем, что поле ввода кода подтверждения видно на экране
  expect(await codeInput.isVisible()).toBeTruthy();
});
