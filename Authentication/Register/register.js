/* ==================== REGISTRATION ELEMENTS ==================== */
const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");
const verificationForm = document.getElementById("verificationForm");
const mobileInput = document.getElementById("mobile");

/* ==================== MOBILE NUMBER INPUT ==================== */
if (mobileInput) {
    mobileInput.addEventListener("input", function () {
        mobileInput.value = mobileInput.value.replace(/\D/g, "").slice(0, 10);
    });
}

/* ==================== BARANGAY QUICK SELECT ==================== */
document.querySelectorAll("[data-ward]").forEach(function (button) {
    button.addEventListener("click", function () {
        document.getElementById("ward").value = button.dataset.ward;
        document.querySelectorAll("[data-ward]").forEach(function (item) {
            item.classList.toggle("selected", item === button);
        });
    });
});

/* ==================== MPIN INPUTS ==================== */
const mpinInputs = Array.from(document.querySelectorAll(".mpin-digit"));
mpinInputs.forEach(function (input, index) {
    input.addEventListener("input", function () {
        input.value = input.value.replace(/\D/g, "").slice(0, 1);
        if (input.value && index < mpinInputs.length - 1) {
            mpinInputs[index + 1].focus();
        }
    });
    input.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && !input.value && index > 0) {
            mpinInputs[index - 1].focus();
        }
    });
    input.addEventListener("paste", function (event) {
        const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
        if (!pasted) return;
        event.preventDefault();
        mpinInputs.forEach(function (digit, digitIndex) {
            digit.value = pasted[digitIndex] || "";
        });
        mpinInputs[Math.min(pasted.length, 3)].focus();
    });
});

/* ==================== REGISTRATION STEP 1 ==================== */
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!registerForm.checkValidity()) {
            registerForm.reportValidity();
            return;
        }
        const mobile = mobileInput.value.trim();
        const pin = mpinInputs.map(function (input) {
            return input.value;
        }).join("");

        if (!/^9\d{9}$/.test(mobile)) {
            registerMessage.textContent = "Enter a valid 10-digit Philippine mobile number starting with 9.";
            registerMessage.className = "form-message error";
            mobileInput.focus();
            return;
        }
        if (!/^\d{4}$/.test(pin)) {
            registerMessage.textContent = "Please create a four-digit MPIN.";
            registerMessage.className = "form-message error";
            mpinInputs[0].focus();
            return;
        }
        if (/^(\d)\1{3}$/.test(pin) || pin === "1234" || pin === "4321") {
            registerMessage.textContent = "Please choose a less predictable four-digit MPIN.";
            registerMessage.className = "form-message error";
            mpinInputs[0].focus();
            return;
        }
        window.location.href = "verification.html";
    });
}

/* ==================== ID VERIFICATION ELEMENTS ==================== */
if (verificationForm) {
    const idType = document.getElementById("idType");
    const idPhoto = document.getElementById("idPhoto");
    const idCamera = document.getElementById("idCamera");
    const imagePreview = document.getElementById("imagePreview");
    const fileMessage = document.getElementById("fileMessage");
    const verificationMessage = document.getElementById("verificationMessage");
    let previewUrl = null;

    /* ==================== ID TYPE QUICK SELECT ==================== */
    document.querySelectorAll("[data-id-type]").forEach(function (button) {
        button.addEventListener("click", function () {
            idType.value = button.dataset.idType;
            document.querySelectorAll("[data-id-type]").forEach(function (item) {
                item.classList.toggle("selected", item === button);
            });
        });
    });

    /* ==================== IMAGE PREVIEW ==================== */
    function showSelectedFile(file) {
        imagePreview.hidden = true;
        imagePreview.removeAttribute("src");
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
            previewUrl = null;
        }
        fileMessage.textContent = "";
        fileMessage.className = "form-message";

        if (!file) return;

        if (!["image/jpeg", "image/png"].includes(file.type)) {
            fileMessage.textContent = "Please choose a JPG or PNG image.";
            fileMessage.className = "form-message error";
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            fileMessage.textContent = "The selected image must be 5 MB or smaller.";
            fileMessage.className = "form-message error";
            return;
        }

        previewUrl = URL.createObjectURL(file);
        imagePreview.src = previewUrl;
        imagePreview.hidden = false;
        fileMessage.textContent = "Local preview ready. The image has not been uploaded.";
        fileMessage.className = "form-message success";
    }

    idPhoto.addEventListener("change", function () {
        if (idPhoto.files.length) {
            showSelectedFile(idPhoto.files[0]);
        }
    });

    idCamera.addEventListener("change", function () {
        if (idCamera.files.length) {
            idPhoto.value = "";
            showSelectedFile(idCamera.files[0]);
        }
    });

    /* ==================== SUBMIT VERIFICATION DEMO ==================== */
    verificationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!verificationForm.checkValidity()) {
            verificationForm.reportValidity();
            return;
        }
        if (!idPhoto.files.length && !idCamera.files.length) {
            verificationMessage.textContent = "Please select or capture an ID image before continuing.";
            verificationMessage.className = "form-message error";
            return;
        }
        verificationMessage.textContent = "Demonstration only: no account was created and no ID was uploaded or sent for review. A secure backend is required for real registration.";
        verificationMessage.className = "form-message error";
    });

    /* ==================== CLEAN UP IMAGE PREVIEW ==================== */
    window.addEventListener("pagehide", function () {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
    });
}