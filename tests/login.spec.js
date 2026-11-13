import { test, expect } from '../fixtures/test-fixtures';
import { getExcelData } from '../utils/excelUtils';
import path from 'path';
const excelPath = path.resolve('test-data/LoginData.xlsx');
const loginData = getExcelData(excelPath, 'LoginData');

for (const data of loginData) {
    test(`Login - ${data.TestCase}`, async ({ loginPage, page }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUsername(String(data.Username ?? ''));
        await loginPage.enterPassword(String(data.Password ?? ''));
        await loginPage.clickLogin();

        if (data.ExpectedResult === 'Success') {
            await expect(page).toHaveURL(/inventory\.html/);
        } else {
            await expect(loginPage.errorMessage).toBeVisible();
        }
    });
}