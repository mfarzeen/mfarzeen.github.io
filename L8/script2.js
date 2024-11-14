// Navigation function for buttons
function navigateTo(page) {
    window.location.href = page; // Redirect to the specified page
}

// Increase Text Size
function increaseTextSize() {
    document.body.classList.toggle("large-text");
}

// Toggle Color Blind Mode
function toggleColorBlindMode() {
    document.body.classList.toggle("color-blind-mode");
}

// Display Alt Text for Images
function showAltText() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        alert(img.alt); // Display each image's alt text directly
    });
}
// Display Alt Text for Images with Image Number
function showAltText() {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        alert(`Image ${index + 1}: ${img.alt}`); // Display "Image X: [alt text]"
    });
}
