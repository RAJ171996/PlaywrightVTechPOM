import { test } from '../fixtures/fixtures';
import userData from '../test-data/user.json';

test('Registration Form Test', async ({
  homePage,
  registrationFormPage,
  successfulMessagePage
}) => {

  const user = userData.validUser;

  await homePage.navigateToHomePage();

  await homePage.navigateToRegistrationForm();

  await registrationFormPage.enterFirstName(
    user.firstName
  );

  await registrationFormPage.enterLastName(
    user.lastName
  );

  if (user.gender === 'Male') {
    await registrationFormPage.selectGenderMale();
  }

  await registrationFormPage.selectCourseInterested();

  await registrationFormPage.enterStreetAddress(
    user.streetAddress
  );

  await registrationFormPage.enterApartment(
    user.apartment
  );

  await registrationFormPage.enterCity(
    user.city
  );

  await registrationFormPage.enterPostalCode(
    user.postalCode
  );

  await registrationFormPage.enterState(
    user.state
  );

  await registrationFormPage.selectCountry(
    user.country
  );

  await registrationFormPage.enterEmail(
    user.email
  );

  await registrationFormPage.enterDateOfDemo(
    user.date.month,
    user.date.year,
    user.date.day
  );

  await registrationFormPage.enterconvinientTimeHH(
    user.time.hour
  );

  await registrationFormPage.enterConvinientTimeMM(
    user.time.minute
  );

  await registrationFormPage.enterMobileNumber(
    user.mobile
  );

  await registrationFormPage.enterYourQuery(
    user.query
  );

  const exampleValue =
    await registrationFormPage.getExampleTextValue();

  const extractedDigits =
    exampleValue?.match(/\d+/)?.[0];

  await registrationFormPage.enterExample(
    extractedDigits ?? ''
  );

  await registrationFormPage.clickSubmitButton();

  await successfulMessagePage.validateSuccessMessage(
    'Registration Form is Successfully Submitted'
  );

});