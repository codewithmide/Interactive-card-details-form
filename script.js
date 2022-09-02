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
    if (cardNameValue.length === 0) {
      cardNameError.innerHTML = "Please enter your name!";
    } else if (keyLetters) {
        cardNameUpdate.innerHTML = cardNameValue;
    } else {
      cardholderName.setAttribute("disabled", "");
      cardNameError.innerHTML = "Please use only letters!";
    }
});

cardholderNumber.addEventListener("keyup", (e) => {
    let cardNumberValue = cardholderNumber.value;
    let key = e.key;
    let keyNumbers = key.match(/^[0-9  ]*$/);
    if (cardNumberValue.length === 0) {
        cardNumberError.innerHTML = "Please enter your card number!";
    } else if (keyNumbers) {
        cardNumUpdate.innerHTML = cardNumberValue;
    } else if (key === "Backspace") {
        cardholderNumber.setAttribute("enabled", "");
    } else {
        cardholderNumber.setAttribute("disabled", "");
        cardNumberError.innerHTML = "Please use only numbers!";
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
       if (value === "") {
      monthError.innerHTML = "Please enter month";
            } else if (valueNumbers) {
      monthBox.innerHTML = value;
    } else {
      monthError.innerHTML = "Please enter month!";
      cardExpMonth.setAttribute("disabled", "");
    }
});

cardExpYear.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (value === "") {
      yearError.innerHTML = "Please enter year!";
    } else if (valueNumbers) {
        cardYearUpdate.innerHTML = valueNumbers;
    } else {
      yearError.innerHTML = "Please enter year!";
      cardExpYear.setAttribute("disabled", "");
    }
  });

  cvc.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (value === "") {
      cvcError.innerHTML = "Please enter cvc!";
    } else if (valueNumbers) {
        cvcUpdate.innerHTML = valueNumbers;
    } else {
      cvcError.innerHTML = "Please enter cvc!";
      cvc.setAttribute("disabled", "");
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