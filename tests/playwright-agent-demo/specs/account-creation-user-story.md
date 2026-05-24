# User Story: Create a New Account

## Story

As a new customer,
I want to create an account on the PrestaShop store,
So that I can browse products, make purchases, and access my order history.

## Acceptance Criteria

### AC1: Account Registration Form Display

- Given I am on the registration page
- When the page loads
- Then I should see a form titled "Create an account" with all required fields

### AC2: Social Title Selection

- Given I am on the registration form
- When I select a social title
- Then the radio button for Mr. or Mrs. should be selected
- And the selection should persist on the form

### AC3: Personal Information Entry

- Given I am on the registration form
- When I enter my personal information
- Then I should be able to enter:
  - First name (required, letters and dots only)
  - Last name (required, letters and dots only)
  - Email address (required, valid format)
  - Password (required, masked by default with show/hide toggle)
  - Birthdate (optional, MM/DD/YYYY format)

### AC4: Agreements and Preferences

- Given I am on the registration form
- When I scroll down
- Then I should see checkboxes for:
  - Receive offers from our partners
  - I agree to the terms and conditions and the privacy policy (required)
  - Sign up for our newsletter
  - Customer data privacy

### AC5: Successful Account Creation

- Given I have filled all required fields with valid data
- And I have checked the terms and conditions checkbox
- When I click the "Create account" button
- Then the account should be created successfully
- And I should be redirected to the home page or confirmation page
- And I should be able to log in with the new credentials

### AC6: Form Validation - Missing Required Field

- Given I am on the registration form
- When I leave any required field empty
- And I click "Create account"
- Then an error message should display indicating which field is required

### AC7: Email Format Validation

- Given I am on the registration form
- When I enter an invalid email format (e.g., "notanemail")
- And I click "Create account"
- Then an error message should display "Invalid email format"

### AC8: Name Format Validation

- Given I am on the registration form
- When I enter special characters or numbers in the First name or Last name fields
- Then the system should display an error message "Only letters and the dot (.) character, followed by a space, are allowed"

### AC9: Terms and Conditions Agreement

- Given I am on the registration form
- When I leave the "I agree to the terms and conditions" checkbox unchecked
- And I click "Create account"
- Then an error message should display "You must agree to the terms and conditions"

### AC10: Password Visibility Toggle

- Given I have entered a password
- When I click the "Show password" button
- Then the password should display as plain text
- And clicking again should mask the password

## Technical Notes

- Email addresses must be unique (no duplicate registrations)
- Birthdate field is optional but should accept MM/DD/YYYY format
- Password requirements should be enforced (minimum length, complexity)
- Form should include clear error messages for validation failures

## Related User Stories

- User Login
- User Password Recovery
