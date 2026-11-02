/* ==================== ADMIN DASHBOARD (FRONTEND PROTOTYPE) ==================== */
/* All data below is sample data. Nothing is saved or sent anywhere.               */
/* Administrators only see aggregated report totals, never individual reports.     */


/* ==================== SAMPLE DATA ==================== */

const residents = [
    { id: "RES-0001", name: "Juan Dela Cruz", barangay: "Tunghaan", mobile: "0917 555 0101", account: "Active", verification: "Verified", idType: "PhilSys National ID", submitted: "Oct 12, 2026" },
    { id: "RES-0002", name: "Maria Santos", barangay: "Pakigne", mobile: "0917 555 0102", account: "Active", verification: "Pending", idType: "Driver's License", submitted: "Nov 1, 2026" },
    { id: "RES-0003", name: "Pedro Reyes", barangay: "Linao", mobile: "0917 555 0103", account: "Active", verification: "Pending", idType: "UMID", submitted: "Nov 1, 2026" },
    { id: "RES-0004", name: "Ana Lopez", barangay: "Calajo-an", mobile: "0917 555 0104", account: "Active", verification: "Pending", idType: "Passport", submitted: "Oct 31, 2026" },
    { id: "RES-0005", name: "Carlos Mendoza", barangay: "Vito", mobile: "0917 555 0105", account: "Suspended", verification: "Verified", idType: "PhilSys National ID", submitted: "Sep 28, 2026" },
    { id: "RES-0006", name: "Liza Ramos", barangay: "Tubod", mobile: "0917 555 0106", account: "Active", verification: "Rejected", idType: "School ID", submitted: "Oct 20, 2026" },
    { id: "RES-0007", name: "Rico Villanueva", barangay: "Guindaruhan", mobile: "0917 555 0107", account: "Active", verification: "Verified", idType: "Voter's ID", submitted: "Oct 5, 2026" },
    { id: "RES-0008", name: "Joanna Cabrera", barangay: "Poblacion Ward II", mobile: "0917 555 0108", account: "Active", verification: "Pending", idType: "Postal ID", submitted: "Oct 30, 2026" },
    { id: "RES-0009", name: "Mark Tan", barangay: "Lipata", mobile: "0917 555 0109", account: "Active", verification: "Verified", idType: "Driver's License", submitted: "Oct 2, 2026" },
    { id: "RES-0010", name: "Grace Alcantara", barangay: "Tunghaan", mobile: "0917 555 0110", account: "Suspended", verification: "Pending", idType: "UMID", submitted: "Oct 29, 2026" }
];

const personnel = [
    { id: "PER-0001", name: "Ramon Dizon", mobile: "0917 555 0201", detail: "Medical Unit", account: "Active" },
    { id: "PER-0002", name: "Felix Navarro", mobile: "0917 555 0202", detail: "Fire Unit", account: "Active" },
    { id: "PER-0003", name: "Dennis Ortega", mobile: "0917 555 0203", detail: "Police Unit", account: "Active" },
    { id: "PER-0004", name: "Alma Pacaña", mobile: "0917 555 0204", detail: "Disaster Response", account: "Suspended" },
    { id: "PER-0005", name: "Jerome Bacalso", mobile: "0917 555 0205", detail: "Medical Unit", account: "Active" }
];

const dispatchers = [
    { id: "DIS-0001", name: "Teresa Quijano", mobile: "0917 555 0301", detail: "Day shift", account: "Active" },
    { id: "DIS-0002", name: "Noel Abella", mobile: "0917 555 0302", detail: "Night shift", account: "Active" },
    { id: "DIS-0003", name: "Cora Villamor", mobile: "0917 555 0303", detail: "Evening shift", account: "Suspended" }
];

const registrationRequests = [
    { id: "REQ-0001", type: "Personnel", name: "Mario Gonzales", mobile: "0917 555 0401", detail: "Fire Unit", submitted: "Nov 1, 2026", status: "Pending" },
    { id: "REQ-0002", type: "Personnel", name: "Hazel Duran", mobile: "0917 555 0402", detail: "Medical Unit", submitted: "Nov 1, 2026", status: "Pending" },
    { id: "REQ-0003", type: "Dispatcher", name: "Leo Fernandez", mobile: "0917 555 0403", detail: "Night shift", submitted: "Oct 31, 2026", status: "Pending" },
    { id: "REQ-0004", type: "Personnel", name: "Ivy Salazar", mobile: "0917 555 0404", detail: "Police Unit", submitted: "Oct 30, 2026", status: "Pending" },
    { id: "REQ-0005", type: "Dispatcher", name: "Bong Castillo", mobile: "0917 555 0405", detail: "Day shift", submitted: "Oct 29, 2026", status: "Rejected" }
];

/* Headline totals (sample). Pending counts are calculated from the lists above. */
const systemTotals = {
    residents: 1248,
    personnel: 46,
    dispatchers: 9,
    suspended: 7
};

/* Aggregated operational snapshot (sample). No individual reports are included. */
const operationalSnapshot = {
    totalReports: 342,
    activeIncidents: 8,
    resolvedIncidents: 327,
    availablePersonnel: 21,
    averageResponse: "6 min",
    categories: [
        { name: "Medical", count: 148, fillClass: "fill-red" },
        { name: "Fire", count: 61, fillClass: "fill-orange" },
        { name: "Police", count: 89, fillClass: "fill-navy" },
        { name: "Disaster", count: 44, fillClass: "" }
    ]
};

const activityLogs = [
    { type: "Verification", time: "Nov 1, 2026 · 4:10 PM", text: "Identity verification approved for RES-0007." },
    { type: "Request", time: "Nov 1, 2026 · 2:45 PM", text: "Registration request REQ-0005 (Dispatcher) was rejected." },
    { type: "Account", time: "Nov 1, 2026 · 11:20 AM", text: "Personnel account PER-0004 was suspended." },
    { type: "Settings", time: "Oct 31, 2026 · 5:05 PM", text: "Maximum MPIN attempts changed to 5." },
    { type: "Account", time: "Oct 31, 2026 · 9:30 AM", text: "Dispatcher account DIS-0003 was suspended." },
    { type: "Verification", time: "Oct 30, 2026 · 3:15 PM", text: "Identity verification rejected for RES-0006." },
    { type: "Account", time: "Oct 29, 2026 · 1:00 PM", text: "Dispatcher account DIS-0002 was created directly." }
];


/* ==================== SMALL HELPERS ==================== */

function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}

function getInitials(name) {
    return name.split(" ").map(function (part) { return part[0]; }).slice(0, 2).join("").toUpperCase();
}

function makeBadge(label) {
    return makeElement("span", "badge badge-" + label.toLowerCase(), label);
}

function makeButton(label, className, onClick) {
    const button = makeElement("button", "small-button " + (className || ""), label);
    button.type = "button";
    button.addEventListener("click", onClick);
    return button;
}

function makeDetail(label, value) {
    const wrapper = makeElement("div", "record-detail");
    wrapper.appendChild(makeElement("span", "", label));
    wrapper.appendChild(makeElement("strong", "", value));
    return wrapper;
}

function makeEmptyState(message) {
    return makeElement("div", "empty-state", message);
}

function formatNow() {
    const now = new Date();
    return now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " · " + now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(function () { toast.classList.remove("show"); }, 2800);
}

function addLog(type, text) {
    activityLogs.unshift({ type: type, time: formatNow(), text: text });
}


/* ==================== NAVIGATION ==================== */

const tabs = document.querySelectorAll(".admin-tab");
const views = document.querySelectorAll(".admin-view");

function showView(viewName) {
    tabs.forEach(function (tab) {
        tab.classList.toggle("active", tab.dataset.view === viewName);
    });

    views.forEach(function (view) {
        view.classList.toggle("active", view.id === "view-" + viewName);
    });

    window.scrollTo(0, 0);
}

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { showView(tab.dataset.view); });
});

document.querySelectorAll("[data-goto]").forEach(function (link) {
    link.addEventListener("click", function () { showView(link.dataset.goto); });
});


/* ==================== MODAL ==================== */

const modalOverlay = document.getElementById("modalOverlay");

function openModal(title, bodyNode, footerButtons) {
    document.getElementById("modalTitle").textContent = title;

    const body = document.getElementById("modalBody");
    body.innerHTML = "";
    body.appendChild(bodyNode);

    const footer = document.getElementById("modalFooter");
    footer.innerHTML = "";
    footerButtons.forEach(function (button) { footer.appendChild(button); });

    modalOverlay.hidden = false;
}

function closeModal() {
    modalOverlay.hidden = true;
}

document.getElementById("modalClose").addEventListener("click", closeModal);

modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeModal();
});


/* ==================== OVERVIEW ==================== */

function countPendingVerifications() {
    return residents.filter(function (resident) { return resident.verification === "Pending"; }).length;
}

function countPendingRequests(type) {
    return registrationRequests.filter(function (request) {
        return request.status === "Pending" && (!type || request.type === type);
    }).length;
}

/* The sample totals represent the whole system. The short lists on screen only show a few accounts, */
/* so changes made on screen are added to or subtracted from the sample totals.                     */
const startingListSizes = { personnel: personnel.length, dispatchers: dispatchers.length };

function countSuspended() {
    return residents.concat(personnel, dispatchers).filter(function (account) { return account.account === "Suspended"; }).length;
}

const startingSuspended = countSuspended();

function renderAccountStats() {
    const container = document.getElementById("accountStats");
    container.innerHTML = "";

    const stats = [
        { value: systemTotals.residents.toLocaleString(), label: "Registered residents", note: "Sample total", className: "stat-navy" },
        { value: systemTotals.personnel + personnel.length - startingListSizes.personnel, label: "Emergency personnel", note: "Sample total", className: "" },
        { value: systemTotals.dispatchers + dispatchers.length - startingListSizes.dispatchers, label: "Dispatchers", note: "Sample total", className: "" },
        { value: countPendingVerifications(), label: "Pending ID verification", note: "Waiting for review", className: "stat-orange" },
        { value: countPendingRequests(), label: "Pending requests", note: "Personnel and dispatcher", className: "stat-orange" },
        { value: systemTotals.suspended + countSuspended() - startingSuspended, label: "Suspended accounts", note: "All account types", className: "stat-red" }
    ];

    stats.forEach(function (stat) {
        const card = makeElement("article", "stat-card " + stat.className);
        card.appendChild(makeElement("strong", "", String(stat.value)));
        card.appendChild(makeElement("span", "", stat.label));
        card.appendChild(makeElement("small", "", stat.note));
        container.appendChild(card);
    });
}

function renderAttentionList() {
    const container = document.getElementById("attentionList");
    container.innerHTML = "";

    const items = [
        { title: countPendingVerifications() + (countPendingVerifications() === 1 ? " identity verification" : " identity verifications") + " to review", note: "Residents who submitted an ID document", view: "verification", count: countPendingVerifications() },
        { title: countPendingRequests("Personnel") + " personnel registration " + (countPendingRequests("Personnel") === 1 ? "request" : "requests"), note: "Waiting for approval", view: "requests", count: countPendingRequests("Personnel") },
        { title: countPendingRequests("Dispatcher") + " dispatcher registration " + (countPendingRequests("Dispatcher") === 1 ? "request" : "requests"), note: "Waiting for approval", view: "requests", count: countPendingRequests("Dispatcher") }
    ];

    const open = items.filter(function (item) { return item.count > 0; });

    if (open.length === 0) {
        container.appendChild(makeEmptyState("Nothing is waiting for review right now."));
        return;
    }

    open.forEach(function (item) {
        const row = makeElement("div", "attention-item");
        const text = makeElement("div", "attention-text");
        text.appendChild(makeElement("strong", "", item.title));
        text.appendChild(makeElement("small", "", item.note));
        row.appendChild(text);
        row.appendChild(makeButton("Review", "small-button-primary", function () { showView(item.view); }));
        container.appendChild(row);
    });
}

function renderSnapshot() {
    const numbers = document.getElementById("snapshotNumbers");
    numbers.innerHTML = "";

    const items = [
        ["Total reports", operationalSnapshot.totalReports],
        ["Active incidents", operationalSnapshot.activeIncidents],
        ["Resolved incidents", operationalSnapshot.resolvedIncidents],
        ["Available personnel", operationalSnapshot.availablePersonnel],
        ["Average response", operationalSnapshot.averageResponse]
    ];

    items.forEach(function (item) {
        const box = makeElement("div", "snapshot-number");
        box.appendChild(makeElement("strong", "", String(item[1])));
        box.appendChild(makeElement("span", "", item[0]));
        numbers.appendChild(box);
    });

    const bars = document.getElementById("categoryBars");
    bars.innerHTML = "";

    const largest = Math.max.apply(null, operationalSnapshot.categories.map(function (category) { return category.count; }));

    operationalSnapshot.categories.forEach(function (category) {
        const row = makeElement("div", "category-row");
        row.appendChild(makeElement("span", "category-name", category.name));

        const track = makeElement("div", "category-track");
        const fill = makeElement("div", "category-fill " + category.fillClass);
        fill.style.width = Math.round((category.count / largest) * 100) + "%";
        track.appendChild(fill);
        row.appendChild(track);

        row.appendChild(makeElement("span", "category-value", String(category.count)));
        bars.appendChild(row);
    });
}

function makeLogItem(log) {
    const item = makeElement("div", "log-item");
    item.appendChild(makeElement("span", "log-time", log.time));
    item.appendChild(makeElement("span", "log-text", log.text));
    item.appendChild(makeElement("span", "badge badge-type", log.type));
    return item;
}

function renderRecentActivity() {
    const container = document.getElementById("recentActivity");
    container.innerHTML = "";
    activityLogs.slice(0, 5).forEach(function (log) { container.appendChild(makeLogItem(log)); });
}


/* ==================== ACCOUNT STATUS ==================== */

function toggleAccountStatus(account, label) {
    const willSuspend = account.account === "Active";
    account.account = willSuspend ? "Suspended" : "Active";

    /* Suspending an account never changes the resident's verification status. */
    addLog("Account", label + " account " + account.id + " was " + (willSuspend ? "suspended." : "activated."));
    showToast(account.id + " is now " + account.account + ".");
    renderAll();
}


/* ==================== RESIDENTS ==================== */

function renderResidents() {
    const container = document.getElementById("residentList");
    container.innerHTML = "";

    const search = document.getElementById("residentSearch").value.trim().toLowerCase();
    const statusFilter = document.getElementById("residentStatusFilter").value;
    const verificationFilter = document.getElementById("residentVerificationFilter").value;

    const matches = residents.filter(function (resident) {
        const text = (resident.name + " " + resident.id + " " + resident.barangay).toLowerCase();
        return text.includes(search) &&
            (statusFilter === "all" || resident.account === statusFilter) &&
            (verificationFilter === "all" || resident.verification === verificationFilter);
    });

    if (matches.length === 0) {
        container.appendChild(makeEmptyState("No residents match your search."));
        return;
    }

    matches.forEach(function (resident) {
        const row = makeElement("div", "record-row");
        row.appendChild(makeElement("div", "record-avatar", getInitials(resident.name)));

        const main = makeElement("div", "record-main");
        main.appendChild(makeElement("strong", "", resident.name));
        main.appendChild(makeElement("small", "", resident.id + " · " + resident.mobile));
        row.appendChild(main);

        row.appendChild(makeDetail("Barangay", resident.barangay));

        const badges = makeElement("div", "record-badges");
        badges.appendChild(makeBadge(resident.account));
        badges.appendChild(makeElement("span", "badge badge-" + resident.verification.toLowerCase(), "ID " + resident.verification));
        row.appendChild(badges);

        const actions = makeElement("div", "record-actions");
        actions.appendChild(makeButton("View", "", function () { openResidentProfile(resident); }));
        actions.appendChild(makeButton(
            resident.account === "Active" ? "Suspend" : "Activate",
            resident.account === "Active" ? "small-button-danger" : "",
            function () { toggleAccountStatus(resident, "Resident"); }
        ));
        row.appendChild(actions);

        container.appendChild(row);
    });
}

function openResidentProfile(resident) {
    const list = makeElement("ul", "detail-list");
    const fields = [
        ["Resident ID", resident.id],
        ["Mobile number", resident.mobile],
        ["Barangay", resident.barangay],
        ["Account status", resident.account],
        ["Identity verification", resident.verification]
    ];

    fields.forEach(function (field) {
        const item = makeElement("li");
        item.appendChild(makeElement("span", "", field[0]));
        item.appendChild(makeElement("strong", "", field[1]));
        list.appendChild(item);
    });

    const note = makeElement("p", "form-hint", "Emergency reports submitted by this resident are not shown here. Administrators cannot access individual reports.");
    note.style.marginTop = "14px";

    const body = makeElement("div");
    body.appendChild(list);
    body.appendChild(note);

    openModal(resident.name, body, [makeButton("Close", "", closeModal)]);
}

["residentSearch", "residentStatusFilter", "residentVerificationFilter"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", renderResidents);
});


/* ==================== PERSONNEL AND DISPATCHERS ==================== */

function renderStaffList(containerId, accounts, label, detailLabel) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    accounts.forEach(function (account) {
        const row = makeElement("div", "record-row");
        row.appendChild(makeElement("div", "record-avatar", getInitials(account.name)));

        const main = makeElement("div", "record-main");
        main.appendChild(makeElement("strong", "", account.name));
        main.appendChild(makeElement("small", "", account.id + " · " + account.mobile));
        row.appendChild(main);

        row.appendChild(makeDetail(detailLabel, account.detail));

        const badges = makeElement("div", "record-badges");
        badges.appendChild(makeBadge(account.account));
        row.appendChild(badges);

        const actions = makeElement("div", "record-actions");
        actions.appendChild(makeButton(
            account.account === "Active" ? "Suspend" : "Activate",
            account.account === "Active" ? "small-button-danger" : "",
            function () { toggleAccountStatus(account, label); }
        ));
        row.appendChild(actions);

        container.appendChild(row);
    });
}

function renderStaff() {
    renderStaffList("personnelList", personnel, "Personnel", "Unit");
    renderStaffList("dispatcherList", dispatchers, "Dispatcher", "Shift");
}


/* ==================== CREATE ACCOUNT (DIRECT CREATION) ==================== */

function makeField(labelText, control, inputId) {
    const field = makeElement("div", "form-field");
    const label = makeElement("label", "", labelText);
    label.setAttribute("for", inputId);
    control.id = inputId;
    field.appendChild(label);
    field.appendChild(control);
    return field;
}

function makeSelect(options) {
    const select = document.createElement("select");
    options.forEach(function (option) {
        const element = makeElement("option", "", option);
        element.value = option;
        select.appendChild(element);
    });
    return select;
}

function openCreateAccount(type) {
    const isPersonnel = type === "Personnel";

    const nameInput = makeElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Full name";

    const mobileInput = makeElement("input");
    mobileInput.type = "tel";
    mobileInput.placeholder = "09XX XXX XXXX";

    const detailSelect = makeSelect(isPersonnel
        ? ["Medical Unit", "Fire Unit", "Police Unit", "Disaster Response"]
        : ["Day shift", "Evening shift", "Night shift"]);

    const error = makeElement("p", "form-error");
    const hint = makeElement("p", "form-hint", "Prototype only. In the real system, the new user would receive a temporary MPIN from the server.");

    const body = makeElement("div");
    body.appendChild(makeField("Full name", nameInput, "createName"));
    body.appendChild(makeField("Mobile number", mobileInput, "createMobile"));
    body.appendChild(makeField(isPersonnel ? "Responder unit" : "Shift", detailSelect, "createDetail"));
    body.appendChild(error);
    body.appendChild(hint);

    const createButton = makeButton("Create Account", "small-button-primary", function () {
        const name = nameInput.value.trim();
        const mobile = mobileInput.value.trim();

        if (name === "" || !/^(09|\+639)\d{2}\s?\d{3}\s?\d{4}$/.test(mobile)) {
            error.textContent = "Enter a full name and a valid Philippine mobile number.";
            return;
        }

        const list = isPersonnel ? personnel : dispatchers;
        const prefix = isPersonnel ? "PER-" : "DIS-";
        const id = prefix + String(list.length + 1).padStart(4, "0");

        list.push({ id: id, name: name, mobile: mobile, detail: detailSelect.value, account: "Active" });
        addLog("Account", type + " account " + id + " was created directly.");
        showToast(type + " account " + id + " created.");
        closeModal();
        renderAll();
    });

    openModal("Create " + type + " Account", body, [makeButton("Cancel", "", closeModal), createButton]);
}

document.querySelectorAll("[data-create]").forEach(function (button) {
    button.addEventListener("click", function () { openCreateAccount(button.dataset.create); });
});


/* ==================== IDENTITY VERIFICATION ==================== */

function renderVerification() {
    const pendingContainer = document.getElementById("verificationPendingList");
    const reviewedContainer = document.getElementById("verificationReviewedList");
    pendingContainer.innerHTML = "";
    reviewedContainer.innerHTML = "";

    const pending = residents.filter(function (resident) { return resident.verification === "Pending"; });
    const reviewed = residents.filter(function (resident) { return resident.verification !== "Pending"; });

    if (pending.length === 0) pendingContainer.appendChild(makeEmptyState("No identity verifications are waiting for review."));

    pending.forEach(function (resident) {
        const row = makeElement("div", "record-row");
        row.appendChild(makeElement("div", "record-avatar", getInitials(resident.name)));

        const main = makeElement("div", "record-main");
        main.appendChild(makeElement("strong", "", resident.name));
        main.appendChild(makeElement("small", "", resident.id + " · " + resident.barangay));
        row.appendChild(main);

        row.appendChild(makeDetail("Document", resident.idType));
        row.appendChild(makeDetail("Submitted", resident.submitted));

        const actions = makeElement("div", "record-actions");
        actions.appendChild(makeButton("Review", "small-button-primary", function () { openVerificationReview(resident); }));
        row.appendChild(actions);

        pendingContainer.appendChild(row);
    });

    reviewed.forEach(function (resident) {
        const row = makeElement("div", "record-row");
        row.appendChild(makeElement("div", "record-avatar", getInitials(resident.name)));

        const main = makeElement("div", "record-main");
        main.appendChild(makeElement("strong", "", resident.name));
        main.appendChild(makeElement("small", "", resident.id + " · " + resident.barangay));
        row.appendChild(main);

        row.appendChild(makeDetail("Document", resident.idType));

        const badges = makeElement("div", "record-badges");
        badges.appendChild(makeBadge(resident.verification));
        row.appendChild(badges);

        reviewedContainer.appendChild(row);
    });
}

function decideVerification(resident, decision) {
    resident.verification = decision;
    addLog("Verification", "Identity verification " + (decision === "Verified" ? "approved" : "rejected") + " for " + resident.id + ".");
    showToast("Verification " + decision.toLowerCase() + " for " + resident.name + ".");
    closeModal();
    renderAll();
}

function openVerificationReview(resident) {
    const preview = makeElement("div", "document-preview");
    preview.appendChild(makeElement("strong", "", resident.idType));
    preview.appendChild(makeElement("span", "", "Sample placeholder. In this prototype no real document is uploaded or stored."));

    const list = makeElement("ul", "detail-list");
    [["Resident", resident.name + " (" + resident.id + ")"], ["Barangay", resident.barangay], ["Submitted", resident.submitted]].forEach(function (field) {
        const item = makeElement("li");
        item.appendChild(makeElement("span", "", field[0]));
        item.appendChild(makeElement("strong", "", field[1]));
        list.appendChild(item);
    });

    const body = makeElement("div");
    body.appendChild(list);
    body.appendChild(preview);
    body.appendChild(makeElement("p", "form-hint", "The resident's account stays Active and they can still report emergencies, whatever you decide."));

    openModal("Review Identity Document", body, [
        makeButton("Reject", "small-button-danger", function () { decideVerification(resident, "Rejected"); }),
        makeButton("Approve", "small-button-primary", function () { decideVerification(resident, "Verified"); })
    ]);
}


/* ==================== REGISTRATION REQUESTS ==================== */

function renderRequests() {
    const pendingContainer = document.getElementById("requestPendingList");
    const decidedContainer = document.getElementById("requestDecidedList");
    pendingContainer.innerHTML = "";
    decidedContainer.innerHTML = "";

    const typeFilter = document.getElementById("requestTypeFilter").value;
    const visible = registrationRequests.filter(function (request) {
        return typeFilter === "all" || request.type === typeFilter;
    });

    const pending = visible.filter(function (request) { return request.status === "Pending"; });
    const decided = visible.filter(function (request) { return request.status !== "Pending"; });

    if (pending.length === 0) pendingContainer.appendChild(makeEmptyState("No pending registration requests."));
    if (decided.length === 0) decidedContainer.appendChild(makeEmptyState("No decided requests yet."));

    function makeRequestRow(request, withActions) {
        const row = makeElement("div", "record-row");
        row.appendChild(makeElement("div", "record-avatar", getInitials(request.name)));

        const main = makeElement("div", "record-main");
        main.appendChild(makeElement("strong", "", request.name));
        main.appendChild(makeElement("small", "", request.id + " · " + request.mobile));
        row.appendChild(main);

        const badges = makeElement("div", "record-badges");
        badges.appendChild(makeElement("span", "badge badge-type", request.type));
        if (!withActions) badges.appendChild(makeBadge(request.status));
        row.appendChild(badges);

        row.appendChild(makeDetail(request.type === "Personnel" ? "Unit" : "Shift", request.detail));
        row.appendChild(makeDetail("Submitted", request.submitted));

        if (withActions) {
            const actions = makeElement("div", "record-actions");
            actions.appendChild(makeButton("Reject", "small-button-danger", function () { decideRequest(request, "Rejected"); }));
            actions.appendChild(makeButton("Approve", "small-button-primary", function () { decideRequest(request, "Approved"); }));
            row.appendChild(actions);
        }

        return row;
    }

    pending.forEach(function (request) { pendingContainer.appendChild(makeRequestRow(request, true)); });
    decided.forEach(function (request) { decidedContainer.appendChild(makeRequestRow(request, false)); });
}

function decideRequest(request, decision) {
    request.status = decision;

    if (decision === "Approved") {
        const list = request.type === "Personnel" ? personnel : dispatchers;
        const prefix = request.type === "Personnel" ? "PER-" : "DIS-";
        const id = prefix + String(list.length + 1).padStart(4, "0");
        list.push({ id: id, name: request.name, mobile: request.mobile, detail: request.detail, account: "Active" });
        addLog("Request", "Registration request " + request.id + " (" + request.type + ") was approved. Account " + id + " created.");
    } else {
        addLog("Request", "Registration request " + request.id + " (" + request.type + ") was rejected.");
    }

    showToast("Request " + request.id + " " + decision.toLowerCase() + ".");
    renderAll();
}

document.getElementById("requestTypeFilter").addEventListener("change", renderRequests);


/* ==================== SYSTEM SETTINGS ==================== */

document.getElementById("saveSettingsButton").addEventListener("click", function () {
    addLog("Settings", "System settings were updated.");
    showToast("Settings saved (demonstration only).");
    renderAll();
});


/* ==================== ACTIVITY LOGS ==================== */

function renderLogs() {
    const container = document.getElementById("logList");
    container.innerHTML = "";

    const filter = document.getElementById("logTypeFilter").value;
    const logs = activityLogs.filter(function (log) { return filter === "all" || log.type === filter; });

    if (logs.length === 0) {
        container.appendChild(makeEmptyState("No activity for this filter."));
        return;
    }

    logs.forEach(function (log) { container.appendChild(makeLogItem(log)); });
}

document.getElementById("logTypeFilter").addEventListener("change", renderLogs);


/* ==================== TAB COUNTS ==================== */

function updateTabCounts() {
    const verificationCount = document.getElementById("verificationTabCount");
    const requestsCount = document.getElementById("requestsTabCount");

    verificationCount.textContent = countPendingVerifications();
    requestsCount.textContent = countPendingRequests();

    verificationCount.classList.toggle("is-empty", countPendingVerifications() === 0);
    requestsCount.classList.toggle("is-empty", countPendingRequests() === 0);
}


/* ==================== RENDER EVERYTHING ==================== */

function renderAll() {
    renderAccountStats();
    renderAttentionList();
    renderSnapshot();
    renderRecentActivity();
    renderResidents();
    renderStaff();
    renderVerification();
    renderRequests();
    renderLogs();
    updateTabCounts();
}

renderAll();
