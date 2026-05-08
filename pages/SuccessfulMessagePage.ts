import { Page, Locator, expect } from '@playwright/test';

export class SuccessfulMessagePage {

    private readonly page: Page;
    private readonly successfulMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successfulMessage = page.locator('[id="messageContainer"]');
    }

    async validateSuccessMessage(expected: string) {

        await this.successfulMessage.waitFor({state: 'visible',timeout: 10000});

        await expect(this.successfulMessage).toContainText(expected);

        const actualMessage = await this.successfulMessage.textContent();

        console.log(`Success Message: ${actualMessage}`);

        const transactionId = actualMessage?.match(/\d+/)?.[0];

        console.log(`Transaction ID: ${transactionId}`);
    }
}