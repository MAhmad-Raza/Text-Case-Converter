// Retrieving Buttons From HTML

const toUpperCase = document.getElementById("toUpperCase");
const toLowerCase = document.getElementById("toLowerCase");
const toCapitalizeCase = document.getElementById("toCapitalize");
const toAlternateCase = document.getElementById("toAlternateCase");
const toTitleCase = document.getElementById("toTitleCase");
const toInverseCase = document.getElementById("toInverseCase");
const copyText = document.getElementById("copyText");
const clearText = document.getElementById("clearText");

// Upper Case Funtionality

toUpperCase.addEventListener("click", () => {
  const text = (document.getElementById("textArea").style.textTransform =
    "uppercase");
  text.value = text;
});

// Lower Case Funtionality

toLowerCase.addEventListener("click", () => {
  const text = (document.getElementById("textArea").style.textTransform =
    "lowercase");
  text.value = text;
});

// Capitalize Case Functionality

toCapitalizeCase.addEventListener("click", () => {
  const text = (document.getElementById("textArea").style.textTransform =
    "capitalize");
  text.value = text;
});

// Alternating Case Functionality

toAlternateCase.addEventListener("click", () => {
  let text = document.getElementById("textArea");
  let val = text.value;
  let t = val
    .split("")
    .map((letter, i) =>
      i % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
  text.value = t;
});

// Title Case Functionality

toTitleCase.addEventListener("click", () => {
  let text = document.getElementById("textArea");
  let val = text.value;
  let t = val
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  text.value = t;
});

// Inverse Case Functionality

toInverseCase.addEventListener("click", () => {
  let text = document.getElementById("textArea");
  let val = text.value;
  const convertString = str => [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
  text.value = convertString(val);
});

// Copy To Clipboard Functionality

copyText.addEventListener("click", () => {
  const text = document.getElementById("textArea");
  if (text.value == "") {
    alert("Enter Text");
  } else {
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text Copied!");
  }
});

// Clear Text Functionality

clearText.addEventListener("click", () => {
  const text = document.getElementById("textArea");
  text.value = "";
});
