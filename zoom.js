document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const zoomedImage = document.getElementById('zoomedImage');
    const closeButton = document.querySelector('.close-button');
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    // **REVISED: Hide the modal after a very short delay to avoid initial flash**
    // This allows the browser to apply initial CSS, then JS explicitly ensures it's hidden.
    if (modal) { // Ensure the modal element exists before trying to hide it
        setTimeout(() => {
            modal.style.display = 'none';
        }, 50); // A 50ms delay is usually imperceptible but effective
    }

    // Function to open the modal
    function openModal(imageSrc) {
        zoomedImage.src = imageSrc;
        modal.style.display = 'flex'; // Use 'flex' here to ensure centering based on CSS
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        zoomedImage.src = ''; // Clear image source when closing
    }

    // Add click event listener to each image in the gallery
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            openModal(this.src); // 'this.src' gets the source of the clicked image
        });
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', closeModal);

    // Add click event listener to the modal overlay itself to close it
    modal.addEventListener('click', function(event) {
        // Close only if clicking directly on the modal background, not the image itself
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add keyboard escape key listener to close the modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') { // Check for 'flex' display
            closeModal();
        }
    });
});