const cardNumUpdate = document.querySelector(".card-num-update");
const cardNameUpdate = document.querySelector(".card-name-update");
const cardholderName = document.getElementById("card-holder");
const cardholderNumber = document.getElementById("card-number");
const monthBox = document.querySelector(".card-month-update");
const cardExpMonth = document.getElementById("month");
const cardYearUpdate = document.querySelector(".card-year-update");
const cardExpYear = document.getElementById("year");
const cvcUpdate = document.querySelector(".cvc-update");
const cvc = document.getElementById("cvc");
const submitBtn = document.getElementById("button");
const form = document.querySelector(".form");
const submitedContainer = document.getElementById("done");
const continueBtn = document.getElementById("complete");
const hiddenContainer = document.querySelector(".hidden")


cardholderName.addEventListener("keyup", (e) => {
    let cardNameValue = cardholderName.value;
    let key = e.key;
    let keyLetters = key.match(/^[A-za-z ]*$/);
    if (keyLetters) {
      cardNameUpdate.innerHTML = cardNameValue;
    }
});

cardholderNumber.addEventListener("keyup", (e) => {
    let cardNumberValue = cardholderNumber.value;
    let key = e.key;
    let keyNumbers = key.match(/^[0-9  ]*$/);
    if (keyNumbers) {
        cardNumUpdate.innerHTML = cardNumberValue;
    }
});

cardholderNumber.addEventListener("input", (e) => {
    e.target.value = e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
});

cardExpMonth.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (valueNumbers) {
      monthBox.innerHTML = value;
    }
});

cardExpYear.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (valueNumbers) {
        cardYearUpdate.innerHTML = valueNumbers;
    }
  });

  cvc.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (valueNumbers) {
        cvcUpdate.innerHTML = valueNumbers;
    }
});

submitBtn.addEventListener("click", () => {
    hiddenContainer.classList.remove("hidden");
    form.style.display = "none";
});

continueBtn.addEventListener("click", () => {
    hiddenContainer.classList.add("hidden");
    form.style.display = "flex";
});


// APPRECIATION TO DR MESAZIM (https://github.com/DrMESAZIM)