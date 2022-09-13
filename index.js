let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

const getPassword = document.querySelector(".btn-gen");
const savePassword = document.querySelector(".btn-save");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

getPassword.addEventListener("click", function () {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
});

savePassword.addEventListener("click", function () {
  savePassword.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya: ${password.value}`)
  );
  savePassword.setAttribute("download", "MyPasswordGeneratorLOG.txt");
});

function updateTextInput(val) {
  document.getElementById("value-range").value = val;
}
