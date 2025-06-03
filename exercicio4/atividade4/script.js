document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const imageModal = document.getElementById('imageModal');
    const expandedImage = document.getElementById('expandedImage');
    const captionText = document.getElementById('caption');
    const closeButton = imageModal.querySelector('.close-button');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            imageModal.style.display = 'flex';
            expandedImage.src = image.src;
            captionText.innerHTML = image.alt;
        });
    });

    closeButton.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
});