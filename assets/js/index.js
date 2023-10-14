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

const mNumber = document.getElementById("container");
let numberToString = document.querySelector(".mobile_number");

numberToString.addEventListener("input", function () {
  let inputValue = numberToString.value;
  inputValue = inputValue.toString();
  let inputLength = inputValue.length;
  const isMatch = () => {
    let withCountryCodes = inputValue.includes("+");
    let withoutCountryCode = true;
    if (withCountryCodes) {
      if (inputLength >= 7) {
        let matchWithCountryCode = inputValue.slice(0, 7);
        if (MTN_PREFIX.some((i) => i.toString() === matchWithCountryCode)) {
          console.log("number is an mtn number");
          displayLogo("mtn.png");
        } else if (
          AIRTEL_PREFIX.some((i) => i.toString() === matchWithCountryCode)
        ) {
          console.log("number is an airtel number");
        } else if (
          GLO_PREFIX.some((i) => i.toString === matchWithCountryCode)
        ) {
          console.log("number is a glo number");
        } else if (
          ETISALAT_PREFIX.some((i) => i.toString === matchWithCountryCode)
        ) {
          console.log("number is a 9mobile number");
        } else {
          console.log("number aint no Nigerian number");
        }
      }
    } else if (withoutCountryCode) {
      if (inputLength >= 4) {
        let firstFour = inputValue.slice(0, 4);
        if (MTN_PREFIX.some((i) => i.toString() === firstFour)) {
          console.log("number is an mtn number");
        } else if (AIRTEL_PREFIX.some((i) => i.toString() === firstFour)) {
          console.log("number is an airtel number");
        } else if (GLO_PREFIX.some((i) => i.toString === firstFour)) {
          console.log("number is a glo number");
        } else if (ETISALAT_PREFIX.some((i) => i.toString === firstFour)) {
          console.log("number is a 9mobile number");
        } else {
          console.log("number aint no Nigerian number");
        }
      }
    }
  };
  isMatch();
});

function displayLogo(logoFileName) {
  const logoImage = document.createElement("img");
  logoImage.src = logoFileName;
  mNumber.appendChild(logoImage);
}