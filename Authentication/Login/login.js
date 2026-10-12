
/* ==================== LOGIN FORM INTERACTIONS ==================== */

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    const loginMessage = document.getElementById("loginMessage");


    /* ==================== TOGGLE PASSWORD VISIBILITY ==================== */

    toggleLoginPassword.addEventListener("click", function () {
        const isPasswordHidden = loginPassword.type === "password";

        loginPassword.type = isPasswordHidden ? "text" : "password";
        toggleLoginPassword.textContent = isPasswordHidden ? "Hide" : "Show";

        toggleLoginPassword.setAttribute(
            "aria-label",
            isPasswordHidden ? "Hide password" : "Show password"
        );

        toggleLoginPassword.setAttribute(
            "aria-pressed",
            String(isPasswordHidden)
        );
    });


    /* ==================== LOGIN FORM SUBMISSION ==================== */

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        loginMessage.textContent = "";
        loginMessage.className = "form-message";

        const email = loginEmail.value.trim();
        const password = loginPassword.value;

        if (!email || !password) {
            loginMessage.textContent = "Please enter your email and password.";
            loginMessage.classList.add("error");
            return;
        }

        loginMessage.textContent =
            "Login is currently a frontend demonstration. Account verification and automatic dashboard redirection will be implemented with authentication.";

        loginMessage.classList.add("success");
    });
});
