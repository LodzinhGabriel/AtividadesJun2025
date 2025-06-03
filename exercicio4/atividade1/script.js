document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorChangingButton');

    button.addEventListener('mouseover', () => {
        button.classList.add('hovered');
    });

    button.addEventListener('mouseout', () => {
        button.classList.remove('hovered');
    });
});