# PrestaShop Demo Store Test Plan

## Overview

PrestaShop Demo Store - A comprehensive e-commerce platform for testing account creation, user authentication, product browsing, and purchase completion workflows. The store features product categories (Clothes, Accessories, Art), user account management, shopping cart functionality, and checkout processes.

---

## Test Suite 1: Account Creation and Registration

### Test 1.1: Complete Account Registration with Valid Data

**File:** `account-creation-valid.spec.ts`

**Steps:**

1. Navigate to PrestaShop demo store registration page at https://prime-lip.demo.prestashop.com/registration
   - **Expected:** Registration page loads successfully, form title 'Create an account' is visible, all form fields are accessible

2. Select 'Mr.' as the social title
   - **Expected:** Social title radio button 'Mr.' is selected

3. Enter first name 'John' in the First name field
   - **Expected:** First name field contains 'John'

4. Enter last name 'Smith' in the Last name field
   - **Expected:** Last name field contains 'Smith'

5. Enter email 'john.smith@example.com' in the Email field
   - **Expected:** Email field contains the entered email

6. Enter password 'SecurePass123!' in the Password field
   - **Expected:** Password field is populated, password visibility toggle is available

7. Enter birthdate '05/15/1990' in the Birthdate field
   - **Expected:** Birthdate field contains '05/15/1990', field displays as optional

8. Check the 'Receive offers from our partners' checkbox
   - **Expected:** Checkbox is checked

9. Check the 'I agree to the terms and conditions and the privacy policy' checkbox
   - **Expected:** Checkbox is checked

10. Check the 'Sign up for our newsletter' checkbox
    - **Expected:** Checkbox is checked

11. Check the 'Customer data privacy' checkbox
    - **Expected:** Checkbox is checked

12. Click the 'Create account' button
    - **Expected:** Account creation is processed, user is redirected to home page or confirmation page, success message displays if applicable

---

### Test 1.2: Account Registration with Missing Required Fields

**File:** `account-creation-invalid.spec.ts`

**Steps:**

1. Navigate to registration page
   - **Expected:** Registration page loads successfully

2. Leave First name field empty and click 'Create account' button
   - **Expected:** Form validation error appears, user stays on registration page, error message indicates 'First name is required' or similar

3. Fill in First name and leave Last name empty, then click 'Create account'
   - **Expected:** Form validation error appears, error message indicates missing Last name

4. Fill in personal information but leave Email field empty and click 'Create account'
   - **Expected:** Form validation error appears, error message indicates missing Email

5. Fill in personal information but leave Password field empty and click 'Create account'
   - **Expected:** Form validation error appears, error message indicates missing Password

6. Leave 'I agree to terms and conditions' checkbox unchecked and click 'Create account'
   - **Expected:** Form validation error appears, error message indicates agreement to terms is required

---

### Test 1.3: Account Registration with Invalid Email Format

**File:** `account-creation-email-validation.spec.ts`

**Steps:**

1. Navigate to registration page and fill in all required fields
   - **Expected:** Registration form is displayed with all fields

2. Enter invalid email 'notanemail' in the Email field
   - **Expected:** Email field contains 'notanemail'

3. Click 'Create account' button
   - **Expected:** Form validation error appears, error message indicates 'Invalid email format' or similar

4. Correct the email to a valid format 'test@example.com'
   - **Expected:** Email field is corrected

5. Click 'Create account' button again
   - **Expected:** Account creation proceeds or completes

---

### Test 1.4: Account Registration with Invalid Name Format

**File:** `account-creation-name-validation.spec.ts`

**Steps:**

1. Navigate to registration page
   - **Expected:** Registration page loads successfully

2. Enter special characters like '@#$%' in the First name field
   - **Expected:** Form shows validation error or prevents entry, error message indicates 'Only letters and dot are allowed'

3. Enter numbers '123' in the First name field
   - **Expected:** Form shows validation error or prevents entry

4. Enter valid name 'John' in First name field
   - **Expected:** First name is accepted

---

### Test 1.5: Social Title Selection During Registration

**File:** `account-social-title.spec.ts`

**Steps:**

1. Navigate to registration page
   - **Expected:** Registration page displays Social title options

2. Verify 'Mr.' and 'Mrs.' radio button options are visible
   - **Expected:** Both social title options are displayed

3. Select 'Mrs.' radio button
   - **Expected:** Mrs. option is selected

4. Switch back to 'Mr.' option
   - **Expected:** Mr. is now selected, previous selection is deselected

5. Submit form with 'Mrs.' selected
   - **Expected:** Form submission includes the selected social title

---

### Test 1.6: Password Visibility Toggle

**File:** `account-password-visibility.spec.ts`

**Steps:**

1. Navigate to registration page and enter password 'TestPassword123'
   - **Expected:** Password field shows masked characters by default

2. Click the 'Show password' toggle button
   - **Expected:** Password becomes visible as plain text 'TestPassword123'

3. Click the toggle button again
   - **Expected:** Password is masked again

---

### Test 1.7: Birthdate Field is Optional

**File:** `account-birthdate-optional.spec.ts`

**Steps:**

1. Navigate to registration page and fill all required fields
   - **Expected:** All required fields are populated

2. Leave Birthdate field empty and check it displays 'Optional' label
   - **Expected:** Birthdate field shows 'Optional' indicator

3. Click 'Create account' button without entering birthdate
   - **Expected:** Account creation proceeds without requiring birthdate

---

### Test 1.8: Navigation from Registration to Login Page

**File:** `account-registration-to-login.spec.ts`

**Steps:**

1. Navigate to registration page
   - **Expected:** Registration page displays

2. Locate and click 'Sign in' link in the top navigation or at bottom of form
   - **Expected:** User is redirected to login page

3. Verify login page displays email and password fields
   - **Expected:** Login page with Email and Password fields is displayed

---

## Test Suite 2: User Authentication and Login

### Test 2.1: Login with Valid Credentials

**File:** `login-valid.spec.ts`

**Steps:**

1. Navigate to login page at https://prime-lip.demo.prestashop.com/login
   - **Expected:** Login page loads successfully, Email and Password fields are visible, 'Sign in' button is visible

2. Enter valid email address in Email field
   - **Expected:** Email field contains the entered email

3. Enter valid password in Password field
   - **Expected:** Password field is populated, characters are masked by default

4. Click the 'Sign in' button
   - **Expected:** User is authenticated and redirected to home page or account dashboard, cart or user menu shows user is logged in

---

### Test 2.2: Login with Invalid Email

**File:** `login-invalid-email.spec.ts`

**Steps:**

1. Navigate to login page
   - **Expected:** Login page displays

2. Enter non-existent email 'nonexistent@example.com' in Email field
   - **Expected:** Email field contains the entered email

3. Enter any password in Password field
   - **Expected:** Password field is populated

4. Click 'Sign in' button
   - **Expected:** Authentication fails, error message displays 'Authentication failed' or 'Invalid credentials', user remains on login page

---

### Test 2.3: Login with Incorrect Password

**File:** `login-invalid-password.spec.ts`

**Steps:**

1. Navigate to login page
   - **Expected:** Login page displays

2. Enter valid email address
   - **Expected:** Email field contains the email

3. Enter incorrect password
   - **Expected:** Password field is populated

4. Click 'Sign in' button
   - **Expected:** Authentication fails, error message displays, user remains on login page

---

### Test 2.4: Login with Empty Email Field

**File:** `login-empty-email.spec.ts`

**Steps:**

1. Navigate to login page
   - **Expected:** Login page displays

2. Leave Email field empty and enter password
   - **Expected:** Password field contains data

3. Click 'Sign in' button
   - **Expected:** Form validation error appears, error message indicates Email is required

---

### Test 2.5: Login with Empty Password Field

**File:** `login-empty-password.spec.ts`

**Steps:**

1. Navigate to login page
   - **Expected:** Login page displays

2. Enter email address but leave Password field empty
   - **Expected:** Email field is populated, Password field is empty

3. Click 'Sign in' button
   - **Expected:** Form validation error appears, error message indicates Password is required

---

### Test 2.6: Password Show/Hide Toggle on Login Page

**File:** `login-password-toggle.spec.ts`

**Steps:**

1. Navigate to login page and enter password 'MyPassword123'
   - **Expected:** Password field shows masked characters

2. Click 'Show password' button
   - **Expected:** Password becomes visible as plain text

3. Click 'Show password' button again
   - **Expected:** Password is masked again

---

### Test 2.7: Forgot Password Link Navigation

**File:** `login-forgot-password.spec.ts`

**Steps:**

1. Navigate to login page
   - **Expected:** Login page displays, 'Forgot your password?' link is visible

2. Click 'Forgot your password?' link
   - **Expected:** User is navigated to password recovery page

3. Verify password recovery page displays email field for reset
   - **Expected:** Password recovery form is visible

---

### Test 2.8: Create Account Link on Login Page

**File:** `login-create-account-link.spec.ts`

**Steps:**

1. Navigate to login page
   - **Expected:** Login page displays, 'Create your account' link is visible under 'No account?' section

2. Click 'Create your account' link
   - **Expected:** User is navigated to registration page

3. Verify registration form is displayed
   - **Expected:** Registration page shows all required fields

---

## Test Suite 3: Product Browsing and Selection

### Test 3.1: View Product Categories

**File:** `browsing-categories.spec.ts`

**Steps:**

1. Navigate to home page https://prime-lip.demo.prestashop.com/
   - **Expected:** Home page loads successfully, main navigation shows product categories

2. Verify main categories are visible: Clothes, Accessories, Art
   - **Expected:** All main categories are displayed in navigation

3. Click on 'Clothes' category
   - **Expected:** User is navigated to Clothes category page, products in Clothes category are displayed

---

### Test 3.2: View Featured Products

**File:** `browsing-featured.spec.ts`

**Steps:**

1. Navigate to home page
   - **Expected:** Home page loads successfully, 'Featured products' section is visible

2. Verify featured products display with product image, name, and price
   - **Expected:** Product images are displayed, product names are visible, prices are shown

3. Check for discount badges on products
   - **Expected:** Discount percentage (e.g., '-20%') is displayed on applicable products

---

### Test 3.3: Product Quick View

**File:** `browsing-quick-view.spec.ts`

**Steps:**

1. Navigate to home page with featured products visible
   - **Expected:** Featured products are displayed

2. Click 'Quick view' button on a product
   - **Expected:** Quick view modal or popup opens showing product details

3. Verify quick view displays product image, name, description, and price
   - **Expected:** Product information is displayed in quick view

4. Close the quick view modal
   - **Expected:** Modal closes and user returns to product list

---

### Test 3.4: View Full Product Details

**File:** `browsing-product-details.spec.ts`

**Steps:**

1. Navigate to home page and locate a featured product
   - **Expected:** Featured products are visible

2. Click on product name or image to view full details
   - **Expected:** Product detail page loads, full product information is displayed

3. Verify product detail page shows: image, name, price, description, variants
   - **Expected:** All product information is visible, size and color options are displayed if applicable

4. Check for 'Add to cart' button on product page
   - **Expected:** 'Add to cart' button is visible

---

### Test 3.5: Product Size and Color Variants

**File:** `browsing-product-variants.spec.ts`

**Steps:**

1. Navigate to a product detail page with multiple variants (e.g., sizes and colors)
   - **Expected:** Product detail page displays

2. Verify size options are available (e.g., S, M, L, XL)
   - **Expected:** Size selector is visible with available options

3. Verify color options are available (e.g., White, Black, etc.)
   - **Expected:** Color selector is visible with available options

4. Select different size and color combinations
   - **Expected:** Selected variants are highlighted, product price updates if applicable

---

### Test 3.6: Search Functionality

**File:** `browsing-search.spec.ts`

**Steps:**

1. Navigate to home page and locate search bar at top
   - **Expected:** Search bar is visible in header

2. Enter product name in search field (e.g., 'shirt')
   - **Expected:** Search suggestions appear or search is submitted

3. Review search results
   - **Expected:** Search results page displays matching products

4. Search for non-existent product (e.g., 'xyz123notreal')
   - **Expected:** Search results show 'No products found' message or empty results

---

## Test Suite 4: Shopping Cart Management

### Test 4.1: Add Single Product to Cart

**File:** `cart-add-single.spec.ts`

**Steps:**

1. Navigate to home page and locate a featured product
   - **Expected:** Featured products are displayed

2. Select quantity '1' in the quantity selector for a product
   - **Expected:** Quantity field shows '1'

3. Click 'Add to cart' button
   - **Expected:** Product is added to cart, cart counter increments from 0 to 1, success message displays

---

### Test 4.2: Add Multiple Products to Cart

**File:** `cart-add-multiple.spec.ts`

**Steps:**

1. Navigate to home page with featured products
   - **Expected:** Featured products section is visible

2. Add first product to cart by clicking 'Add to cart'
   - **Expected:** Cart counter shows '1'

3. Add second product to cart
   - **Expected:** Cart counter increments to '2'

4. Add third product to cart
   - **Expected:** Cart counter increments to '3'

---

### Test 4.3: Adjust Product Quantity Before Adding to Cart

**File:** `cart-quantity-adjust.spec.ts`

**Steps:**

1. Navigate to product listing with quantity controls visible
   - **Expected:** Quantity selector is displayed with decrease and increase buttons

2. Click increase button multiple times to set quantity to '5'
   - **Expected:** Quantity field shows '5'

3. Click 'Add to cart' button
   - **Expected:** Product is added with quantity 5, cart shows '5' items

---

### Test 4.4: Select Product Variants Before Adding to Cart

**File:** `cart-variants.spec.ts`

**Steps:**

1. Navigate to product with size and color options
   - **Expected:** Variant selectors are visible

2. Select size 'M' from size selector
   - **Expected:** Size 'M' is selected

3. Select color 'Black' from color selector
   - **Expected:** Color 'Black' is selected

4. Click 'Add to cart' button
   - **Expected:** Product with selected variants is added to cart

---

### Test 4.5: View Cart Summary

**File:** `cart-view-summary.spec.ts`

**Steps:**

1. Add products to cart and click on cart icon in header
   - **Expected:** Cart page or sidebar opens showing cart contents

2. Verify cart displays: product names, quantities, prices, and total
   - **Expected:** All product information is visible, subtotal is calculated correctly

3. Verify each item shows correct unit price and line total
   - **Expected:** Prices are displayed correctly

---

### Test 4.6: Remove Product from Cart

**File:** `cart-remove-product.spec.ts`

**Steps:**

1. Add multiple products to cart
   - **Expected:** Cart contains multiple items

2. Open cart view and locate a product to remove
   - **Expected:** Cart page displays all items

3. Click remove button for one product
   - **Expected:** Product is removed from cart, cart total updates, item count decreases

---

### Test 4.7: Update Product Quantity in Cart

**File:** `cart-update-quantity.spec.ts`

**Steps:**

1. Add product to cart with quantity 2
   - **Expected:** Cart shows item with quantity 2

2. Open cart view and locate quantity controls for the product
   - **Expected:** Quantity adjustment controls are visible

3. Change quantity from 2 to 5 using increase button
   - **Expected:** Quantity updates to 5, line total updates, cart total updates

---

### Test 4.8: View Applied Discounts in Cart

**File:** `cart-discounts.spec.ts`

**Steps:**

1. Add discounted product (showing '-20%' badge) to cart
   - **Expected:** Product is added to cart

2. Open cart and verify discounted price is displayed
   - **Expected:** Product shows both original and discounted prices, discount amount is visible

3. Verify cart total reflects the discounted price
   - **Expected:** Total is calculated with discount applied

---

## Test Suite 5: Checkout and Purchase Flow

### Test 5.1: Complete Checkout as Guest User

**File:** `checkout-guest.spec.ts`

**Steps:**

1. Add products to cart and navigate to checkout
   - **Expected:** Checkout page or process begins

2. Select 'Guest checkout' or 'Continue as guest' option if presented
   - **Expected:** Guest checkout option is available and selected

3. Enter shipping address: name, address, city, postal code, country
   - **Expected:** Shipping address form is displayed and fields are filled

4. Select shipping method
   - **Expected:** Shipping methods are available for selection

5. Enter email address for order confirmation
   - **Expected:** Email field is populated

6. Review order summary showing products, quantities, prices, and total
   - **Expected:** Order summary displays all information accurately

---

### Test 5.2: Checkout as Logged-In User

**File:** `checkout-logged-in.spec.ts`

**Steps:**

1. Login with valid credentials
   - **Expected:** User is logged in successfully

2. Add products to cart
   - **Expected:** Products are added to cart

3. Click 'Proceed to checkout' button
   - **Expected:** Checkout page loads, user's email and saved addresses are pre-filled if available

4. Review and confirm shipping address
   - **Expected:** Address is displayed correctly

5. Select shipping method
   - **Expected:** Shipping method options are available

---

### Test 5.3: Enter Shipping Address

**File:** `checkout-shipping-address.spec.ts`

**Steps:**

1. Navigate to checkout and reach shipping address step
   - **Expected:** Shipping address form is displayed

2. Enter recipient name, street address, city
   - **Expected:** Address fields are populated

3. Enter postal code and select country
   - **Expected:** Postal code and country are filled

4. Verify phone number field is optional
   - **Expected:** Phone field can be skipped or shows optional indicator

5. Click 'Continue' to proceed to next step
   - **Expected:** Form validates and progresses to next checkout step

---

### Test 5.4: Select Shipping Method

**File:** `checkout-shipping-method.spec.ts`

**Steps:**

1. Proceed to shipping method selection step
   - **Expected:** Shipping method options are displayed

2. Verify multiple shipping options are available with costs
   - **Expected:** Shipping methods show names and associated costs

3. Select a standard shipping method
   - **Expected:** Selected method is highlighted, order total updates to include shipping cost

4. Verify delivery time estimate is displayed
   - **Expected:** Expected delivery date or timeframe is shown

---

### Test 5.5: Review Order Summary Before Payment

**File:** `checkout-order-summary.spec.ts`

**Steps:**

1. Reach the final review step before payment
   - **Expected:** Order summary is displayed

2. Verify order summary shows: products, quantities, unit prices, line totals
   - **Expected:** All products and quantities are correct

3. Verify subtotal, shipping cost, taxes, and final total are displayed
   - **Expected:** All charges are itemized and total is accurate

4. Verify shipping address is correct
   - **Expected:** Address matches the entered information

---

### Test 5.6: Enter Payment Information

**File:** `checkout-payment.spec.ts`

**Steps:**

1. Proceed to payment step in checkout
   - **Expected:** Payment method selection is available

2. Select credit card as payment method
   - **Expected:** Credit card payment option is selected

3. Enter card details: number, expiry date, CVV
   - **Expected:** All payment fields are populated with valid test data

4. Enter cardholder name
   - **Expected:** Cardholder name field is filled

5. Verify billing address option is available
   - **Expected:** Billing address matches shipping address or allow change

---

### Test 5.7: Complete Purchase with Valid Payment

**File:** `checkout-complete.spec.ts`

**Steps:**

1. Reach payment confirmation step with all details entered
   - **Expected:** All checkout steps are completed

2. Review final order summary
   - **Expected:** Order details are displayed correctly

3. Click 'Place order' or 'Complete purchase' button
   - **Expected:** Order is submitted for processing, payment is processed

4. Verify order confirmation page displays
   - **Expected:** Confirmation page shows 'Order successful' message, order number is displayed, email confirmation is sent

5. Verify order summary shows all items and final total
   - **Expected:** Order confirmation displays all purchased items and total amount

---

### Test 5.8: Checkout with Missing Required Fields

**File:** `checkout-validation.spec.ts`

**Steps:**

1. Navigate to checkout with items in cart
   - **Expected:** Checkout process begins

2. Leave shipping address name field empty and click 'Continue'
   - **Expected:** Form validation error appears, error message indicates name is required

3. Leave street address empty and try to continue
   - **Expected:** Validation error displays

4. Skip required postal code field
   - **Expected:** Error message indicates postal code is required

---

### Test 5.9: View Order Tracking After Purchase

**File:** `checkout-order-tracking.spec.ts`

**Steps:**

1. Complete a purchase and reach confirmation page
   - **Expected:** Order confirmation is displayed

2. Locate order number and tracking information
   - **Expected:** Order number is clearly displayed

3. Verify link or section to track order status is available
   - **Expected:** Link to order tracking or 'My Orders' is visible

---

## Test Suite 6: User Account Management

### Test 6.1: View My Account Dashboard

**File:** `account-dashboard.spec.ts`

**Steps:**

1. Login with valid user account
   - **Expected:** User is logged in successfully

2. Navigate to 'My Account' or account dashboard
   - **Expected:** Account dashboard page loads

3. Verify dashboard displays user information and menu options
   - **Expected:** User name and email are displayed, navigation menu shows account options

---

### Test 6.2: View Order History

**File:** `account-order-history.spec.ts`

**Steps:**

1. Login to user account and navigate to order history
   - **Expected:** Order history page loads

2. Verify all previous orders are displayed with order number, date, and status
   - **Expected:** Orders list shows all order information

3. Click on an order to view full details
   - **Expected:** Order detail page shows items, amounts, and status

---

### Test 6.3: Update Account Information

**File:** `account-update-info.spec.ts`

**Steps:**

1. Login and navigate to account information page
   - **Expected:** Account info editing form is displayed

2. Edit first name from 'John' to 'Johnny'
   - **Expected:** First name field is updated

3. Click 'Save' button
   - **Expected:** Changes are saved, confirmation message displays

4. Navigate away and return to account info page
   - **Expected:** Updated first name 'Johnny' is displayed

---

### Test 6.4: Change Account Password

**File:** `account-change-password.spec.ts`

**Steps:**

1. Login and navigate to password change section
   - **Expected:** Password change form is displayed

2. Enter current password in 'Current password' field
   - **Expected:** Current password field is filled

3. Enter new password in 'New password' field
   - **Expected:** New password field is populated

4. Confirm new password in 'Confirm password' field
   - **Expected:** Confirm password field matches new password

5. Click 'Update password' button
   - **Expected:** Password is updated, success message displays

---

### Test 6.5: Logout from Account

**File:** `account-logout.spec.ts`

**Steps:**

1. Login to user account
   - **Expected:** User is logged in

2. Locate and click 'Logout' or 'Sign out' button
   - **Expected:** Logout button is visible and clickable

3. Verify user is logged out and redirected to home page
   - **Expected:** Home page is displayed, sign in link reappears in header, user information is no longer visible

---

## Test Suite 7: Navigation and Site Features

### Test 7.1: Homepage Navigation

**File:** `navigation-homepage.spec.ts`

**Steps:**

1. Navigate to PrestaShop home page
   - **Expected:** Home page loads successfully

2. Verify header displays: logo, category menu, search bar, cart icon
   - **Expected:** All header elements are visible

3. Verify footer displays: company info, product links, customer service links
   - **Expected:** Footer sections are visible

4. Click PrestaShop logo
   - **Expected:** User is redirected to home page

---

### Test 7.2: Category Navigation

**File:** `navigation-categories.spec.ts`

**Steps:**

1. From home page, hover over or click 'Clothes' category
   - **Expected:** Clothes category menu opens or category page loads

2. Verify subcategories or products are displayed
   - **Expected:** Clothing items are shown

3. Click on 'Accessories' category
   - **Expected:** Accessories page loads, accessories products are displayed

---

### Test 7.3: Language Selection

**File:** `navigation-language.spec.ts`

**Steps:**

1. Navigate to home page and locate language selector in header
   - **Expected:** Language dropdown is visible showing 'English'

2. Click language selector dropdown
   - **Expected:** Language options are displayed (French, Spanish, German, etc.)

3. Select 'Français' language
   - **Expected:** Page content updates to French, language selector shows 'Français' as selected

4. Select 'English' again to return to English
   - **Expected:** Page content is in English

---

### Test 7.4: Newsletter Subscription

**File:** `navigation-newsletter.spec.ts`

**Steps:**

1. Navigate to home page and scroll to footer
   - **Expected:** Footer is visible

2. Locate newsletter subscription section
   - **Expected:** Newsletter signup form is displayed

3. Enter email address in subscription field
   - **Expected:** Email field contains entered address

4. Click 'Subscribe' button
   - **Expected:** Subscription is processed, confirmation message displays

---

### Test 7.5: Contact Us Navigation

**File:** `navigation-contact.spec.ts`

**Steps:**

1. Navigate to home page and click 'Contact us' link in header
   - **Expected:** Contact page loads

2. Verify contact form or contact details is displayed
   - **Expected:** Contact form or contact information is visible

---

### Test 7.6: Footer Links Navigation

**File:** `navigation-footer-links.spec.ts`

**Steps:**

1. Navigate to home page and scroll to footer
   - **Expected:** Footer is visible

2. Verify footer contains links to: Delivery, Legal Notice, Terms and Conditions, About Us
   - **Expected:** All footer links are visible

3. Click 'Delivery' link
   - **Expected:** Delivery information page loads

4. Click 'Legal Notice' link
   - **Expected:** Legal notice page loads

---

## Test Data and Setup

### Test Account Credentials

- **Email:** testuser@example.com
- **Password:** TestPassword123!
- **First Name:** Test
- **Last Name:** User

### Test Product Data

- **Product 1:** Hummingbird printed t-shirt (available in multiple colors and sizes)
- **Product 2:** Brown bear printed sweater (available in multiple sizes)
- **Category:** Clothes, Accessories, Art

### Setup Instructions

1. Create test accounts before running login/authentication tests
2. Ensure products are available in the store
3. Clear cart and browser cache before each test session
4. Use a fresh browser session for authentication tests to avoid session conflicts

### Teardown Instructions

1. Clear cart after each purchase test
2. Log out from account after account management tests
3. Clear cookies and cache between test suites if needed
4. Delete test data created during test runs

---

## Success Criteria

All tests should pass with the following criteria:

- All steps execute without errors
- Expected outcomes match actual results
- Error messages are clear and appropriate
- UI elements are accessible and responsive
- Form validations work correctly
- Cart and checkout calculations are accurate
- Order processing completes successfully

---

## Known Limitations

- Demo store may have intermittent availability
- Payment processing uses test mode; no real charges are made
- Some features may vary between different store instances
- Session timeout may affect long-running tests

---

## Maintenance Notes

- Update product names and categories if store inventory changes
- Update URLs if store domain changes
- Review and update payment methods if store configuration changes
- Monitor for UI/UX changes that may affect test selectors
