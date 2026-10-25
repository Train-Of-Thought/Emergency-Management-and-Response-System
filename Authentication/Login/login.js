/* ==================== LOGIN ELEMENTS ==================== */
const pinSlots = Array.from(document.querySelectorAll(".pin-slot"));
const keypadKeys = document.querySelectorAll("[data-digit]");
const deleteDigitButton = document.getElementById("deleteDigit");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");
const changeResidentButton = document.getElementById("changeResident");
const forgotPinButton = document.getElementById("forgotPin");
const biometricButton = document.getElementById("biometricButton");
const otpButton = document.getElementById("otpButton");
let enteredPin = "";

/* ==================== UPDATE PIN DISPLAY ==================== */
function updatePinDisplay() {
    pinSlots.forEach(function (slot, index) {
        slot.classList.toggle("filled", index < enteredPin.length);
    });
}

/* ==================== DISPLAY MESSAGE ==================== */
function showMessage(message, type) {
    loginMessage.textContent = message;
    loginMessage.className = "form-message " + type;
}

/* ==================== NUMERIC KEYPAD ==================== */
keypadKeys.forEach(function (key) {
    key.addEventListener("click", function () {
        if (enteredPin.length >= 4) return;
        enteredPin += key.dataset.digit;
        updatePinDisplay();
        showMessage("", "");
    });
});

/* ==================== DELETE PIN DIGIT ==================== */
deleteDigitButton.addEventListener("click", function () {
    enteredPin = enteredPin.slice(0, -1);
    updatePinDisplay();
    showMessage("", "");
});

/* ==================== LOGIN DEMONSTRATION ==================== */
loginButton.addEventListener("click", function () {
    if (enteredPin.length !== 4) {
        showMessage("Please enter all four digits of your MPIN.", "error");
        return;
    }
    showMessage("Prototype only: the MPIN has not been authenticated. A secure backend is required to sign in.", "error");
});

/* ==================== ALTERNATE LOGIN OPTIONS ==================== */
forgotPinButton.addEventListener("click", function () {
    showMessage("MPIN reset via SMS OTP is planned but not connected in this prototype.", "error");
});

biometricButton.addEventListener("click", function () {
    showMessage("Biometric login is a visual prototype only and is not connected.", "error");
});

otpButton.addEventListener("click", function () {
    showMessage("SMS OTP login is a visual prototype only. No message will be sent.", "error");
});

changeResidentButton.addEventListener("click", function () {
    enteredPin = "";
    updatePinDisplay();
    showMessage("Resident selection is not connected in this prototype.", "error");
});

/* ==================== KEYBOARD SUPPORT ==================== */
document.addEventListener("keydown", function (event) {
    if (/^\d$/.test(event.key) && enteredPin.length < 4) {
        enteredPin += event.key;
        updatePinDisplay();
        showMessage("", "");
    }
    if (event.key === "Backspace") {
        enteredPin = enteredPin.slice(0, -1);
        updatePinDisplay();
        showMessage("", "");
    }
    if (event.key === "Enter") {
        loginButton.click();
    }
});