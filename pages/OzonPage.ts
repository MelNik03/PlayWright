import { expect, type Locator, type Page } from '@playwright/test';

export class OzonPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Открываем форму авторизации
    async openFormAuth() {
        //await this.page.waitForSelector('.df8_47_9');
        await this.page.locator('.d4019-a').click();
       // await this.page.waitForSelector('.df8_47_9');
        await this.page.locator('.d4019-a').click();
    }

    // Заполняем поля для авторизации
    async fillFormAuth() {
        await this.page.waitForSelector('.ga121-a2 .tsBodyControl500Medium');
        await this.page.locator('.ga121-a2 .tsBodyControl500Medium').click();
        await this.page.waitForSelector('.d019-a.d019-a3.d019-a4');
        await this.page.locator('.d019-a.d019-a3.d019-a4').click();
        await this.page.locator('.d019-a.d019-a3.d019-a4').fill('melgotchenko_n@iuca.kg');
        await this.page.waitForSelector('.b2121-a0.b2121-b5.b2121-b2.b2121-a4');
        await this.page.locator('.b2121-a0.b2121-b5.b2121-b2.b2121-a4').click();
    }
}