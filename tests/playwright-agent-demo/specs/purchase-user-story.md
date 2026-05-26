# User Story: Complete a Purchase

## Story

As a customer, I want to browse products, add items to my cart, and complete a purchase, So that I can receive the products I've selected and paid for.

## Acceptance Criteria

### AC1: Browse Products

- Given I am on the home page
- When the page loads
- Then I should see featured products with:
  - Product images
  - Product names
  - Prices (original and discounted if applicable)
  - Discount badges (e.g., "-20%") for sale items

### AC2: View Product Details

- Given I am viewing featured products
- When I click on a product name or image
- Then I should see the full product details page with:
  - Full product image
  - Product name and description
  - Available sizes and colors (if applicable)
  - Current price
  - "Add to cart" button
  - Quantity selector

### AC3: Select Product Variants

- Given I am on a product detail page with variants
- When I select different sizes or colors
- Then the selection should update
- And the product should be associated with the selected variants

### AC4: Add Product to Cart

- Given I am on a product page or featured products section
- When I enter a quantity and click "Add to cart"
- Then the product should be added to my cart
- And the cart counter in the header should increase
- And a confirmation message should display

### AC5: View Shopping Cart

- Given I have added products to my cart
- When I click the cart icon in the header
- Then I should see a cart view showing:
  - All products in the cart
  - Quantity for each product
  - Unit price and line total for each item
  - Cart subtotal
  - Remove button for each item
  - Update quantity controls

### AC6: Update Cart Quantity

- Given I am viewing my shopping cart
- When I change the quantity for a product
- Then the line total should update
- And the cart subtotal should recalculate
- And the changes should persist

### AC7: Remove Product from Cart

- Given I have products in my cart
- When I click the remove button for a product
- Then that product should be removed from the cart
- And the cart total should update
- And the item count should decrease

### AC8: View Discounts in Cart

- Given I have added a discounted product to my cart
- When I view the cart
- Then both the original and discounted prices should display
- And the discount amount should be visible
- And the total should reflect the discounted price

### AC9: Proceed to Checkout

- Given I have products in my cart
- When I click "Proceed to checkout" or "Continue to checkout"
- Then the checkout process should begin

### AC10: Enter Shipping Address

- Given I am in the checkout process
- When I reach the shipping address step
- Then I should be able to enter:
  - Full name (required)
  - Street address (required)
  - City (required)
  - Postal code (required)
  - Country (required dropdown)
  - Phone number (optional)

### AC11: Select Shipping Method

- Given I am at the shipping method selection step
- When the page loads
- Then I should see available shipping options with:
  - Shipping method name
  - Cost
  - Estimated delivery time
- And I should be able to select a shipping method
- And the order total should update to include shipping cost

### AC12: Review Order Summary

- Given I am at the order review step
- When I view the summary
- Then I should see:
  - All products with quantities and prices
  - Subtotal
  - Shipping cost
  - Taxes (if applicable)
  - Final total
  - Shipping address

### AC13: Select Payment Method

- Given I am at the payment step
- When the page displays payment options
- Then I should be able to select credit card payment
- And I should be able to enter:
  - Card number
  - Expiry date
  - CVV/Security code
  - Cardholder name

### AC14: Complete Payment and Order

- Given I have entered all required payment information
- When I click "Place order" or "Complete purchase"
- Then the payment should be processed
- And the order should be created
- And I should see an order confirmation page showing:
  - "Order successful" or similar confirmation message
  - Order number
  - Order total
  - All ordered items
  - Shipping address

### AC15: Order Confirmation Email

- Given I have successfully completed a purchase
- When the order is created
- Then I should receive a confirmation email with:
  - Order number
  - Order details
  - Customer information
  - Tracking information (if applicable)

### AC16: Guest Checkout

- Given I am not logged in
- When I proceed to checkout
- Then I should be able to complete the purchase as a guest
- And I should not be required to create an account
- And I should only need to provide shipping and payment information

### AC17: Logged-In User Checkout

- Given I am logged in to my account
- When I proceed to checkout
- Then my saved addresses should be pre-populated
- And I should be able to select a saved address or enter a new one

### AC18: Checkout Validation

- Given I am at any checkout step
- When I try to proceed without entering required information
- Then error messages should display for missing required fields
- And I should not be able to proceed until required fields are filled

### AC19: Order Tracking

- Given I have successfully completed a purchase
- When I view my order confirmation
- Then I should see order tracking information
- And I should be able to access my order history

## Technical Notes

- Cart should persist if user navigates away and returns (unless cleared)
- Discounts should be applied automatically based on product eligibility
- Shipping costs should be calculated based on destination and selected method
- Payment processing should validate card information before submission
- Order numbers should be unique and trackable

## Related User Stories

- User Authentication / Login
- Create Account
- Product Browsing
- Apply Coupon Code (if applicable)
- Track Order Status
