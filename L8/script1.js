// Navigation functions
function navigateTo(page) {
    window.location.href = page; // Redirect to the specified page
}

function highlight(element) {
    element.style.backgroundColor = "hsla(246, 68%, 50%, 0.5)";
    element.style.borderRadius = "5px";
}

function unhighlight(element) {
    element.style.backgroundColor = "transparent";
}

// Form handling code
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Collect input data from the form
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        inquiry: document.getElementById("inquiry").value,
        allowContact: document.getElementById("allowContact").checked, // true if checked
        contactMethod: document.querySelector("input[name='contactMethod']:checked").value,
        message: document.getElementById("message").value
    };

    // Convert formData object to a JSON string and store it in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved successfully!");
});

document.getElementById("contactForm").addEventListener("reset", function() {
    // Clear data from localStorage and notify the user
    localStorage.removeItem("formData");
    alert("Form data and local storage cleared.");
});