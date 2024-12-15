import {test, expect, type Page} from '@playwright/test'
import { OzonPage } from '../pages/OzonPage';

test.describe('Ozon', ()=> {
    test('Check', async({page}) => {
        const ozonPage = new OzonPage(page)

        //Открываем главную страницу сайта
        await page.goto('www.ozon.ru');

        // Нажимаю на кнопку Войти
        await ozonPage.openFormAuth()
        
        //Авторизация
        await ozonPage.fillFormAuth()
        await page.waitForTimeout(6000)
    })
})