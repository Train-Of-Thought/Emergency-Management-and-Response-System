
/* ==================== DASHBOARD INTERACTIONS ==================== */

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const reportSearch = document.getElementById("reportSearch");
    const queueList = document.getElementById("queueList");
    const sortQueueButton = document.getElementById("sortQueueButton");
    const viewAllReportsButton = document.getElementById("viewAllReportsButton");
    const newDispatchButton = document.getElementById("newDispatchButton");
    const notificationButton = document.getElementById("notificationButton");
    const mapViewButton = document.getElementById("mapViewButton");
    const incidentMap = document.getElementById("incidentMap");
    const demoToast = document.getElementById("demoToast");

    let oldestFirst = true;
    let alternateMapStyle = false;
    let toastTimeout;


    /* ==================== DISPLAY DEMONSTRATION MESSAGE ==================== */

    function showToast(message) {
        demoToast.textContent = message;
        demoToast.classList.add("visible");

        clearTimeout(toastTimeout);

        toastTimeout = setTimeout(function () {
            demoToast.classList.remove("visible");
        }, 3500);
    }


    /* ==================== SEARCH INCIDENTS ==================== */

    function filterIncidents() {
        const searchTerm = reportSearch.value.trim().toLowerCase();
        const incidentCards = queueList.querySelectorAll(".incident-card");

        incidentCards.forEach(function (card) {
            const matches = card.textContent.toLowerCase().includes(searchTerm);

            card.classList.toggle("search-hidden", !matches);
        });
    }

    reportSearch.addEventListener("input", filterIncidents);

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        filterIncidents();
    });


    /* ==================== SORT INCIDENT QUEUE ==================== */

    sortQueueButton.addEventListener("click", function () {
        const incidentCards = Array.from(
            queueList.querySelectorAll(".incident-card")
        );

        oldestFirst = !oldestFirst;

        incidentCards.sort(function (first, second) {
            const firstTime = Number(first.dataset.time);
            const secondTime = Number(second.dataset.time);

            return oldestFirst
                ? secondTime - firstTime
                : firstTime - secondTime;
        });

        incidentCards.forEach(function (card) {
            queueList.appendChild(card);
        });

        sortQueueButton.textContent = oldestFirst
            ? "Oldest first ↓"
            : "Newest first ↑";

        showToast("Sample incident queue sorted.");
    });


    /* ==================== VERIFY AND DISPATCH DEMONSTRATIONS ==================== */

    queueList.addEventListener("click", function (event) {
        const verifyButton = event.target.closest(".verify-button");
        const dispatchButton = event.target.closest(".dispatch-button");
        const callButton = event.target.closest(".call-button");
        const incidentCard = event.target.closest(".incident-card");

        if (!incidentCard) {
            return;
        }

        const incidentName =
            incidentCard.querySelector(".incident-information strong").textContent.trim();

        const incidentId = incidentCard.querySelector(".incident-information small")
            .textContent.split("·")[0].trim();

        if (verifyButton) {
            showToast(
                "Demonstration only: " + incidentId +
                " would be reviewed by authorized personnel. No record was changed."
            );

            return;
        }

        if (dispatchButton) {
            showToast(
                "Demonstration only: dispatch for " + incidentId +
                " is not connected to real response units."
            );

            return;
        }

        if (callButton) {
            showToast(
                "Contact details for " + incidentName +
                " are not connected in this prototype."
            );
        }
    });


    /* ==================== NEW DISPATCH DEMONSTRATION ==================== */

    newDispatchButton.addEventListener("click", function () {
        showToast(
            "New Dispatch is a visual demonstration. Real dispatch requires authorized workflows and backend integration."
        );
    });


    /* ==================== NOTIFICATION DEMONSTRATION ==================== */

    notificationButton.addEventListener("click", function () {
        showToast(
            "Notifications are sample interface elements. Live alerts are not connected."
        );
    });


    /* ==================== MAP STYLE TOGGLE ==================== */

    mapViewButton.addEventListener("click", function () {
        alternateMapStyle = !alternateMapStyle;

        if (alternateMapStyle) {
            incidentMap.style.backgroundColor = "#e4ebf1";
            mapViewButton.textContent = "◈ Standard";
        } else {
            incidentMap.style.backgroundColor = "#e8eee7";
            mapViewButton.textContent = "◈ Streets";
        }

        showToast(
            "Illustrative map appearance changed. This is not a real map layer."
        );
    });


    /* ==================== MAP ZOOM DEMONSTRATION ==================== */

    let mapZoom = 1;

    function updateMapZoom(change) {
        mapZoom = Math.max(1, Math.min(1.25, mapZoom + change));

        const mapElements = incidentMap.querySelectorAll(
            ".map-block, .map-road, .map-label, .map-marker, .map-water, .map-park"
        );

        mapElements.forEach(function (element) {
            element.style.translate = "0 0";
            element.style.scale = mapZoom;
        });

        showToast(
            mapZoom > 1
                ? "Illustrative map zoom increased."
                : "Illustrative map returned to its default zoom."
        );
    }

    document.getElementById("zoomIn").addEventListener("click", function () {
        updateMapZoom(0.05);
    });

    document.getElementById("zoomOut").addEventListener("click", function () {
        updateMapZoom(-0.05);
    });


    /* ==================== VIEW ALL REPORTS DEMONSTRATION ==================== */

    viewAllReportsButton.addEventListener("click", function () {
        showToast(
            "Four sample incident cards are displayed. The remaining reports are not loaded in this frontend prototype."
        );
    });


    /* ==================== MAP MARKER INTERACTIONS ==================== */

    incidentMap.addEventListener("click", function (event) {
        const marker = event.target.closest(".map-marker");

        if (!marker) {
            return;
        }

        const reportId = marker.dataset.reportId;

        if (reportId) {
            showToast(
                "Selected sample incident " + reportId +
                ". Actual incident details are not connected."
            );
        } else {
            showToast(
                "This is an illustrative unit marker, not a live GPS position."
            );
        }
    });


    /* ==================== SIDEBAR ACTIVE LINK ==================== */

    const navigationLinks = document.querySelectorAll(".nav-link");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigationLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

});
