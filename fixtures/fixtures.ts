import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationFormPage } from '../pages/RegistrationFormPage';
import { SuccessfulMessagePage } from '../pages/SuccessfulMessagePage';

type MyFixtures = {
  homePage: HomePage;
  registrationFormPage: RegistrationFormPage;
  successfulMessagePage: SuccessfulMessagePage;
};

export const test = base.extend<MyFixtures>({

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  registrationFormPage: async ({ page }, use) => {
    await use(new RegistrationFormPage(page));
  },

  successfulMessagePage: async ({ page }, use) => {
    await use(new SuccessfulMessagePage(page));
  }

});

export { expect } from '@playwright/test';