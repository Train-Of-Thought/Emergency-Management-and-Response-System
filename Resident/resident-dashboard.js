
/* ==================== RESIDENT DASHBOARD INTERACTIONS ==================== */

document.addEventListener("DOMContentLoaded", function () {
    const sosButton = document.getElementById("sosButton");
    const sosHoldLabel = document.getElementById("sosHoldLabel");
    const sosInstruction = document.getElementById("sosInstruction");
    const categoryCards = document.querySelectorAll(".category-card");
    const notificationButton = document.getElementById("notificationButton");
    const hotlineCard = document.getElementById("hotlineCard");
    const demoToast = document.getElementById("demoToast");
    const greetingText = document.getElementById("greetingText");

    let holdTimer = null;
    let holdStartedAt = 0;
    let holdCompleted = false;
    let toastTimeout = null;
    let isHolding = false;

    const requiredHoldTime = 3000;


    /* ==================== DEMONSTRATION MESSAGE ==================== */

    function showToast(message) {
        demoToast.textContent = message;
        demoToast.classList.add("visible");

        clearTimeout(toastTimeout);

        toastTimeout = setTimeout(function () {
            demoToast.classList.remove("visible");
        }, 3500);
    }


    /* ==================== PERSONALIZED GREETING ==================== */

    function updateGreeting() {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            greetingText.textContent = "Good morning,";
        } else if (currentHour < 18) {
            greetingText.textContent = "Good afternoon,";
        } else {
            greetingText.textContent = "Good evening,";
        }
    }

    updateGreeting();


    /* ==================== SOS HOLD RESET ==================== */

    function resetSOS() {
        clearTimeout(holdTimer);
        holdTimer = null;
        isHolding = false;

        sosButton.classList.remove("holding");
        sosHoldLabel.innerHTML =
            '<span class="hold-dot"></span> Tap &amp; hold';
    }


    /* ==================== SOS HOLD START ==================== */

    function startSOSHold(event) {
        if (isHolding || holdCompleted) {
            return;
        }

        if (event.button !== undefined && event.button !== 0) {
            return;
        }

        event.preventDefault();

        isHolding = true;
        holdStartedAt = Date.now();

        sosButton.classList.add("holding");
        sosHoldLabel.textContent = "Keep holding...";

        sosInstruction.textContent =
            "Keep holding for 3 seconds...";

        holdTimer = setTimeout(function () {
            holdCompleted = true;

            resetSOS();

            sosHoldLabel.textContent = "Demo completed";

            sosInstruction.textContent =
                "SOS demonstration completed. No alert was sent.";

            showToast(
                "SOS demonstration completed. No emergency alert was sent."
            );

            setTimeout(function () {
                holdCompleted = false;

                sosHoldLabel.innerHTML =
                    '<span class="hold-dot"></span> Tap &amp; hold';

                sosInstruction.textContent =
                    "Press and hold for 3 seconds to send alert";
            }, 3500);

        }, requiredHoldTime);
    }


    /* ==================== SOS HOLD RELEASE ==================== */

    function releaseSOSHold() {
        if (!isHolding) {
            return;
        }

        const elapsedTime = Date.now() - holdStartedAt;

        resetSOS();

        if (elapsedTime < requiredHoldTime) {
            sosInstruction.textContent =
                "Hold the button for the full 3 seconds.";

            showToast(
                "SOS demonstration cancelled. Keep holding for 3 seconds to complete it."
            );

            setTimeout(function () {
                if (!isHolding && !holdCompleted) {
                    sosInstruction.textContent =
                        "Press and hold for 3 seconds to send alert";
                }
            }, 2500);
        }
    }

    sosButton.addEventListener("pointerdown", startSOSHold);

    window.addEventListener("pointerup", releaseSOSHold);
    window.addEventListener("pointercancel", releaseSOSHold);
    window.addEventListener("blur", releaseSOSHold);

    sosButton.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });


    /* ==================== CATEGORY SELECTION ==================== */

    categoryCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const selectedCategory = card.dataset.category;

            categoryCards.forEach(function (item) {
                item.classList.remove("selected");
                item.setAttribute("aria-pressed", "false");
            });

            card.classList.add("selected");
            card.setAttribute("aria-pressed", "true");

            showToast(
                selectedCategory +
                " selected. Actual incident reporting is not connected in this prototype."
            );
        });

        card.setAttribute("aria-pressed", "false");
    });


    /* ==================== NOTIFICATION DEMONSTRATION ==================== */

    notificationButton.addEventListener("click", function () {
        showToast(
            "You are viewing sample notifications. Live emergency alerts are not connected."
        );
    });


    /* ==================== HOTLINE DEMONSTRATION ==================== */

    hotlineCard.addEventListener("click", function (event) {
        event.preventDefault();

        showToast(
            "The displayed hotline is sample interface content. Verify the official contact number before deployment."
        );
    });


    /* ==================== INITIAL DASHBOARD STATE ==================== */

    showToast(
        "Welcome to the EMRS Resident Dashboard demonstration."
    );

});
