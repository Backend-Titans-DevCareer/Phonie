document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phone-number');
    const providerIcon = document.getElementById('provider-icon');
    const providerName = document.getElementById('provider-name');
    const submitButton = document.querySelector('button[type="submit"]');
  
    phoneNumberInput.addEventListener('input', function () {
        validateForm();
    });

    nameInput.addEventListener('input', function () {
        validateForm();
    });

    emailInput.addEventListener('input', function () {
        validateForm();
    });

    function validateForm() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phoneNumber = phoneNumberInput.value;

        let validName = true;
        let validEmail = true;
        let validPhoneNumber = false;

        // Validate name
        if (name === '') {
            nameInput.classList.add('invalid');
            validName = false;
        } else {
            nameInput.classList.remove('invalid');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailInput.classList.add('invalid');
            validEmail = false;
        } else {
            emailInput.classList.remove('invalid');
        }


        // Phone number validation
        if (
            /^080[63]/.test(phoneNumber) ||
            /^081[0364]/.test(phoneNumber) ||
            /^090[36]/.test(phoneNumber) ||
            /^070[346(25)(26)]/.test(phoneNumber) ||
            /^081[2]/.test(phoneNumber) ||
            /^080[28]/.test(phoneNumber) ||
            /^090[217]/.test(phoneNumber) ||
            /^070[81]/.test(phoneNumber) ||
            /^080[9]/.test(phoneNumber) ||
            /^090[89]/.test(phoneNumber) ||
            /^081[78]/.test(phoneNumber) ||
            /^090[5]/.test(phoneNumber) ||
            /^080[57]/.test(phoneNumber) ||
            /^081[15]/.test(phoneNumber)
        ) {
            validPhoneNumber = true;
        }

        if (validName && validEmail && validPhoneNumber) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }

        if (validPhoneNumber) {
            // Network provider recognition logic
            if (/^080[63]/.test(phoneNumber)) {
                displayProvider('MTN', 'mtn-logo.png');
            } else if (/^081[0364]/.test(phoneNumber)) {
                displayProvider('MTN', 'mtn-logo.png');
            } else if (/^090[36]/.test(phoneNumber)) {
                displayProvider('MTN', 'mtn-logo.png');
            } else if (/^070[346(25)(26)]/.test(phoneNumber)) {
                displayProvider('MTN', 'mtn-logo.png');
            } else if (/^081[2]/.test(phoneNumber)) {
                displayProvider('Airtel', 'airtel-logo.png');
            } else if (/^080[28]/.test(phoneNumber)) {
                displayProvider('Airtel', 'airtel-logo.png');
            } else if (/^090[217]/.test(phoneNumber)) {
                displayProvider('Airtel', 'airtel-logo.png');
            } else if (/^070[81]/.test(phoneNumber)) {
                displayProvider('Airtel', 'airtel-logo.png');
            } else if (/^080[9]/.test(phoneNumber)) {
                displayProvider('9mobile', '9mobile-logo.png');
            } else if (/^090[89]/.test(phoneNumber)) {
                displayProvider('9mobile', '9mobile-logo.png');
            } else if (/^081[78]/.test(phoneNumber)) {
                displayProvider('9mobile', '9mobile-logo.png');
            } else if (/^090[5]/.test(phoneNumber)) {
                displayProvider('GLO', 'glo-logo.png');
            } else if (/^080[57]/.test(phoneNumber)) {
                displayProvider('GLO', 'glo-logo.png');
            } else if (/^081[15]/.test(phoneNumber)) {
                displayProvider('GLO', 'glo-logo.png');
            } else {
                displayProvider('Unknown', 'unknown-logo.png');
            }
        

            // Display network provider name and icon
            displayProvider(provider, logo);
        }
    }

    function displayProvider(provider, logo) {
        providerName.textContent = provider;
        providerIcon.src = logo;
    }
});