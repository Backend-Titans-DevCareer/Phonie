# Phonie: Identify the Telecoms Carrier from a Phone Number

## Scenario

As a user interacts with your web application, they are required to input their phone number into a designated form field.

## Outcome

Upon entering the phone number into the form field, the user interface (UI) will dynamically indicate the associated telecoms carrier, such as MTN, GLO, Airtel, 9mobile, etc. This may include displaying the respective carrier's icon or logo beside the form field.

## Advanced Features (Optional)

1. **Add Validation:**
   - Utilize the `pattern` attribute in the HTML form field to restrict phone numbers to a specific carrier. For instance, it may be configured to only accept Airtel numbers, making any entry of MTN or GLO numbers invalid.

2. **Support +XYZ Country Codes:**
   - Implement functionality to detect the carrier even if the user prefixes the phone number with a country code, such as +234 for Nigeria. Ensure that the system accurately identifies the carrier irrespective of the country code used.
