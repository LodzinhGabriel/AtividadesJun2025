document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const clickCountSpan = document.getElementById('clickCount');
    let count = 0;

    clickButton.addEventListener('click', () => {
        count++;
        clickCountSpan.textContent = count;
    });
});