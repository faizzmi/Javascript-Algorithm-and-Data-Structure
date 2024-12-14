const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const inputText = document.getElementById('text-input');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');

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

checkBtn.addEventListener('click', function () {
    const input = inputText.value.trim();

    if (input === '') {
        showNotification('Please input a value');
        return;
    }

    function cleanText(text) {
        return text.replace(/[^a-z0-9]/gi, '').toLowerCase();
    }

    const cleanedText = cleanText(input);

    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

    if (isPalindrome) {
        result.textContent = `${input} is a palindrome`;
    } else {
        result.textContent = `${input} is not a palindrome`;
    }
});
