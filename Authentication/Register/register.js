
/* ==================== REGISTRATION FORM INTERACTIONS ==================== */

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const registerName = document.getElementById("registerName");
    const registerEmail = document.getElementById("registerEmail");
    const registerPassword = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const registerMessage = document.getElementById("registerMessage");


    /* ==================== TOGGLE PASSWORD VISIBILITY ==================== */

    function setupPasswordToggle(buttonId, input) {
        const toggleButton = document.getElementById(buttonId);

        toggleButton.addEventListener("click", function () {
            const isPasswordHidden = input.type === "password";

            input.type = isPasswordHidden ? "text" : "password";
            toggleButton.textContent = isPasswordHidden ? "Hide" : "Show";

            toggleButton.setAttribute(
                "aria-label",
                isPasswordHidden ? "Hide password" : "Show password"
            );

            toggleButton.setAttribute(
                "aria-pressed",
                String(isPasswordHidden)
            );
        });
    }

    setupPasswordToggle("toggleRegisterPassword", registerPassword);
    setupPasswordToggle("toggleConfirmPassword", confirmPassword);


    /* ==================== REGISTRATION FORM SUBMISSION ==================== */

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        registerMessage.textContent = "";
        registerMessage.className = "form-message";

        const fullName = registerName.value.trim();
        const email = registerEmail.value.trim();
        const password = registerPassword.value;
        const confirmation = confirmPassword.value;

        if (!fullName || !email || !password || !confirmation) {
            showMessage("Please complete all required fields.", "error");
            return;
        }

        if (password.length < 8) {
            showMessage(
                "Your password must contain at least 8 characters.",
                "error"
            );
            return;
        }

        if (password !== confirmation) {
            showMessage(
                "The passwords do not match. Please check them again.",
                "error"
            );
            return;
        }

        showMessage(
            "Your registration form is valid, but no account has been created or saved. Account creation and role assignment will be implemented with authentication.",
            "success"
        );
    });


    /* ==================== DISPLAY FORM FEEDBACK ==================== */

    function showMessage(message, type) {
        registerMessage.textContent = message;
        registerMessage.className = "form-message " + type;
    }
});
