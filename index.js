// Character
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

// Selector Button
const savePassword = document.querySelector(".btn-save");

// Selector Toggle && Input
// Input
const totalChar = document.getElementById("passwordLength");
const passwordBox = document.getElementById("password");
// Toggle
const upperInput = document.querySelector("#Upper-case");
const lowerInput = document.querySelector("#Lower-case");
const numberInput = document.querySelector("#Numbers");
const symbolInput = document.querySelector("#Symbols");

const getRandomData = (dataSet) => {
  return dataSet[~~(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperAlphabet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerAlphabet);
  }
  if (numberInput.checked) {
    password += getRandomData(numeric);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbol);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passwordBox.value = truncateString(password, totalChar.value);
};

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

const getPassword = document
  .querySelector(".btn-gen")
  .addEventListener("click", function () {
    generatePassword();
  });

savePassword.addEventListener("click", function () {
  savePassword.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya: ${passwordBox.value}`)
  );
  savePassword.setAttribute("download", "MyPasswordGeneratorLOG.txt");
});

function updateTextInput(val) {
  document.getElementById("value-range").value = val;
}
