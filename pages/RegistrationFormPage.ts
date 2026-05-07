import { Page, Locator } from '@playwright/test';

export class RegistrationFormPage {
    private readonly page: Page;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly genderMaleRadio: Locator;
    private readonly courseInterestedCheckbox: Locator;
    private readonly streetAddressField: Locator;
    private readonly apartmentField: Locator;
    private readonly cityField: Locator;
    private readonly postalCodeField: Locator;
    private readonly stateField: Locator;
    private readonly countryDropdown: Locator;
    private readonly emailField: Locator;
    private readonly dateOfDemo: Locator;
    private readonly convinientTimeHH: Locator;
    private readonly convinientTimeMM: Locator;
    private readonly mobileNumberField: Locator;
    private readonly enterYourQueryField: Locator;
    private readonly getExampleText: Locator;
    private readonly exampleField: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.getByRole('textbox', { name: 'First Name *' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name *' });
        this.genderMaleRadio = page.getByRole('radio', { name: 'Male', exact: true });
        this.courseInterestedCheckbox = page.getByRole('checkbox', { name: 'Selenium WebDriver' });
        this.streetAddressField = page.getByRole('textbox', { name: 'Street Address' });
        this.apartmentField = page.getByRole('textbox', { name: 'Apt, Suite, Bldg. (optional)' });
        this.cityField = page.getByRole('textbox', { name: 'City' });
        this.postalCodeField = page.getByRole('textbox', { name: 'Postal / Zip Code' });
        this.stateField = page.getByRole('textbox', { name: 'State / Province / Region' });
        this.countryDropdown = page.locator('[id="vfb-13-country"]');
        this.emailField = page.getByRole('textbox', { name: 'Email *' });
        this.dateOfDemo = page.getByRole('textbox', { name: 'Date of Demo' });
        this.convinientTimeHH = page.locator('[id="vfb-16-hour"]');
        this.convinientTimeMM = page.locator('[id="vfb-16-min"]');
        this.mobileNumberField = page.getByRole('textbox', { name: 'Mobile Number' });
        this.enterYourQueryField = page.getByRole('textbox', { name: 'Enter your query' });
        this.getExampleText = page.getByText('Example: 33');
        this.exampleField = page.getByRole('textbox', { name: 'Please enter two digits as' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });

    }
    async enterFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    async selectGenderMale() {
        await this.genderMaleRadio.check();
    }

    async selectCourseInterested() {
        await this.courseInterestedCheckbox.check();
    }

    async enterStreetAddress(streetAddress: string) {
        await this.streetAddressField.fill(streetAddress);
    }

    async enterApartment(apartment: string) {
        await this.apartmentField.fill(apartment);
    }

    async enterCity(city: string) {
        await this.cityField.fill(city);
    }

    async enterPostalCode(postalCode: string) {
        await this.postalCodeField.fill(postalCode);
    }

    async enterState(state: string) {
        await this.stateField.fill(state);
    }

    async selectCountry(country: string) {
        await this.countryDropdown.selectOption({ label: country });
    }

    async enterEmail(email: string) {
        await this.emailField.fill(email);
    }


    async enterDateOfDemo(targetMonth: string,targetYear: string,targetDate: string) {

        await this.dateOfDemo.click();

        for (let i = 0; i < 24; i++) {

            const text = await this.page.locator('.ui-datepicker-title').textContent();

            if (text?.includes(targetMonth) && text?.includes(targetYear)) {
                break;
            }

            await this.page.locator('.ui-icon-circle-triangle-e').click();
        }

        await this.page.locator(`//a[text()="${targetDate}"]`).click();
    }
    

    async enterconvinientTimeHH(timeHH: string) {
        await this.convinientTimeHH.selectOption({ label: timeHH });
    }

    async enterConvinientTimeMM(timeMM: string) {
        await this.convinientTimeMM.selectOption({ label: timeMM });
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.mobileNumberField.fill(mobileNumber);
    }

    async enterYourQuery(query: string) {
        await this.enterYourQueryField.fill(query);
    }

    async getExampleTextNumberValue() {

        // First get full text
        const exampleText =
            await this.getExampleText.textContent();

        console.log('Full Text:', exampleText);

        // Extract number
        const extractedNumber =
            exampleText?.match(/\d+/)?.[0] ?? '';

        console.log('Extracted Number:', extractedNumber);

        return extractedNumber;
    }

    async enterExample(example: string) {
        await this.exampleField.fill(example);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

}