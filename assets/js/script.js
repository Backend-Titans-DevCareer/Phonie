const MTN_PREFIX = [
  "0703",
  "0706",
  "0803",
  "0806",
  "0801",
  "0813",
  "0814",
  "0816",
  "0903",
  "0906",
  "0913",
  "+234703",
  "+234706",
  "+234803",
  "+234806",
  "+234801",
  "+234813",
  "+234814",
  "+234816",
  "+234903",
  "+234906",
  "+234913",
];
const GLO_PREFIX = [
  "0705",
  "0805",
  "0807",
  "0811",
  "0815",
  "0905",
  "+234705",
  "+234805",
  "+234807",
  "+234811",
  "+234815",
  "+234905",
];
const AIRTEL_PREFIX = [
  "0701",
  "0708",
  "0802",
  "0808",
  "0812",
  "0902",
  "0907",
  "0901",
  "0912",
  "+234701",
  "+234708",
  "+234802",
  "+234808",
  "+234812",
  "+234902",
  "+234907",
  "+234901",
  "+234912",
];
const ETISALAT_PREFIX = [
  "0809",
  "0817",
  "0818",
  "0908",
  "0909",
  "+234809",
  "+234817",
  "+234818",
  "+234908",
  "+234909",
];

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneNumberInput = document.getElementById("phone-number");
  const providerIcon = document.getElementById("provider-icon");
  const providerName = document.getElementById("provider-name");
  const submitButton = document.querySelector('button[type="submit"]');

  phoneNumberInput.addEventListener("input", function (e) {
    const inputValue = e.target.value.trim();
    const isNigerianNumber = inputValue.startsWith("+234") || inputValue.startsWith("080");

    if (inputValue === "") {
      phoneNumberInput.classList.remove("invalid");
      resetProviderIndicator();
      validPhoneNumber = false;
    }
   
    if (isNigerianNumber) {
      if (inputValue.length > 14) {
        e.target.value = inputValue.slice(0, 13);
      }
    } else {
      if (inputValue.length > 11) {
        e.target.value = inputValue.slice(0, 11);
      }
    }

    validateForm()
  });

  nameInput.addEventListener("input", function () {
    validateForm();
  });

  emailInput.addEventListener("input", function () {
    validateForm();
  });

  function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let inputValue = phoneNumberInput.value.trim();

    let validName = true;
    let validEmail = true;
    let validPhoneNumber = true;

    // Validate name
    if (name === "") {
      nameInput.classList.add("invalid");
      validName = false;
    } else {
      nameInput.classList.remove("invalid");
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailInput.classList.add("invalid");
      validEmail = false;
    } else {
      emailInput.classList.remove("invalid");
    }

    if (validName && validEmail && validPhoneNumber) {
      submitButton.style.display = "block";
    } else {
      submitButton.style.display = "none";
    }

    //validate phone number
    inputValue = inputValue.toString();
    let inputLength = inputValue.length;
    if (validPhoneNumber) {
      let withCountryCodes = inputValue.includes("+");
      let withoutCountryCode = true;
      if (withCountryCodes) {
        if (inputLength >= 7) {
          let matchWithCountryCode = inputValue.slice(0, 7);
          if (MTN_PREFIX.some((i) => i.toString() === matchWithCountryCode)) {
            displayProvider("MTN", "./assets/images/mtn-logo.png");
          } else if (
            AIRTEL_PREFIX.some((i) => i.toString() === matchWithCountryCode)
          ) {
            displayProvider("Airtel", "./assets/images/airtel-logo.png");
          } else if (
            GLO_PREFIX.some((i) => i.toString === matchWithCountryCode)
          ) {
            displayProvider(
              "GLO",
              "./assets/images/./assets/images/glo-logo.png"
            );
          } else if (
            ETISALAT_PREFIX.some((i) => i.toString === matchWithCountryCode)
          ) {
            displayProvider("9mobile", "./assets/images/9mobile-logo.png");
          } else {
            displayProvider("Unknown", "./assets/images/unknown-logo.png");
          }
        }
      } else if (withoutCountryCode) {
        if (inputLength >= 4) {
          let firstFour = inputValue.slice(0, 4);
          if (MTN_PREFIX.some((i) => i.toString() === firstFour)) {
            displayProvider("MTN", "./assets/images/mtn-logo.png");
          } else if (AIRTEL_PREFIX.some((i) => i.toString() === firstFour)) {
            displayProvider("Airtel", "./assets/images/airtel-logo.png");
          } else if (GLO_PREFIX.some((i) => i.toString === firstFour)) {
            displayProvider(
              "GLO",
              "./assets/images/./assets/images/glo-logo.png"
            );
          } else if (ETISALAT_PREFIX.some((i) => i.toString === firstFour)) {
            displayProvider("9mobile", "./assets/images/9mobile-logo.png");
          } else {
            displayProvider("Unknown", "./assets/images/unknown-logo.png");
          }

          // Display network provider name and icon
          displayProvider(provider, logo);
        }
      }
    }
  }
  function displayProvider(provider, logo) {
    providerName.textContent = provider;
    providerIcon.src = logo;
  }

  function resetProviderIndicator() {
    providerIcon.src = "./assets/images/net-logo.jpg";
    providerName.textContent = "";
    providerName.style.visibility = "hidden";
  }
});
