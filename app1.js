// script.js
document.addEventListener('DOMContentLoaded', function () {
    const valuesLink = document.getElementById('values-link');
    const valuesImage = document.getElementById('values-image');

    valuesLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        valuesImage.classList.toggle('show'); // Toggle the visibility of the image
    });
});
