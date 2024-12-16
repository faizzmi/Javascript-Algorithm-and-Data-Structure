const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const notificationMessage = document.getElementById("notification-message")

function clear() {
    input.value = "";
    results.textContent = "";
}

function checkTelphoneNumber(number) {
    const validUSPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return validUSPhoneRegex.test(number);
}

function validation() {
    const telephoneNumber = input.value.trim();
    const isUSPhoneNumber = checkTelphoneNumber(telephoneNumber);

    if (!telephoneNumber) {
        showNotification("Please provide a phone number");
        return
    }

    if (isUSPhoneNumber) {
        results.textContent = `Valid US number: ${telephoneNumber}`;
    } else {
        results.textContent = `Invalid US number: ${telephoneNumber}`;
    }
}

function showNotification(message) {
    notificationMessage.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.classList.remove('show', 'hide');
        }, 500);
    }, 2000);
}


checkBtn.addEventListener("click", validation);
clearBtn.addEventListener("click", clear);