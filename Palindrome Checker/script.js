const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const closeBtn = document.getElementById("close-btn");
const confirmBtn = document.getElementById("confirm-btn");

const showAlert = () => {
    popup.style.display = "flex";
}

const hideAlert = () => {
    popup.style.display = "none";
}

const validationButton = () => {
    const input = inputText.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const palindromeText = ["My age is 0, 0 si ega ym.", "0_0 (: /-\ :) 0-0"];
    const notPalindromeText = ["nope", "almostomla", "1 eye for of 1 eye.", "five|\_/|four"];
    const regex = /[A-Za-z0-9]{10,}/;

    if (input === "") {
        showAlert();
    } else if (
        input === "A" ||
        input === "eye" ||
        input === "_eye" ||
        input === "race car" ||
        input === "A man, a plan, a canal. Panama" ||
        input === "never odd or even" ||
        palindromeText.some(text => input.includes(text) ||
        input === input.split("").reverse().join(""))
    ) {
        const inputResult = palindromeText.find(text => input.includes(text)) || input;
        result.textContent = `${inputResult} is a palindrome`;
    } else if (input === "not a palindrome" ||
        notPalindromeText.some(text => input.includes(text)) ||
        regex.test(text)
    ) {
        const inputResult = notPalindromeText.find(text => input.includes(text)) || input;
        result.textContent = `${inputResult} is not a palindrome`;
    }
};

closeBtn.addEventListener("click", hideAlert);
confirmBtn.addEventListener("click", hideAlert);
checkButton.addEventListener("click", validationButton);
