document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Collect input data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        inquiry: document.getElementById("inquiry").value,
        allowContact: document.getElementById("allowContact").checked,
        contactMethod: document.querySelector("input[name='contactMethod']:checked").value,
        message: document.getElementById("message").value
    };

    // Store data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved!");
});

document.getElementById("contactForm").addEventListener("reset", function() {
    localStorage.removeItem("formData");
    alert("Form data and local storage cleared.");
});
