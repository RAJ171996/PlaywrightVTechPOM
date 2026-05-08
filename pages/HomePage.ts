import { Page, Locator } from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    private readonly demoSiteLink: Locator;
    private readonly practiceAutomationLink: Locator;
    private readonly registrationFormLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.demoSiteLink = page.getByText('Demo Sites').nth(1);
        this.practiceAutomationLink = page.getByText('Practice Automation').nth(1);
        this.registrationFormLink = page.getByRole('link', { name: 'Registration Form' });
    }

    async navigateToHomePage() {

        await this.page.goto('/');
    }

    async navigateToRegistrationForm() {

        await this.demoSiteLink.waitFor({state: 'visible'});
        await this.demoSiteLink.hover({force: true});

        await this.practiceAutomationLink.waitFor({state: 'visible'});
        await this.practiceAutomationLink.hover({force: true});
 
        await this.registrationFormLink.waitFor({state: 'visible'});
        await this.registrationFormLink.click({force: true});

        await this.page.getByRole('heading', { name: 'Registration Form' }).waitFor();
    }

}



