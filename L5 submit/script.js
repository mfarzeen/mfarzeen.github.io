document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality for sections: My Institutions, Activities, Awards, and Courses
    const sections = [
        {heading: 'institutions-heading', content: 'institutions-content'},
        {heading: 'activities-heading', content: 'activities-content'},
        {heading: 'awards-heading', content: 'awards-content'},
        {heading: 'courses-heading', content: 'courses-content'}
    ];

    sections.forEach(section => {
        const headingElement = document.getElementById(section.heading);
        const contentElement = document.getElementById(section.content);
        const indicator = headingElement.querySelector('.dropdown-indicator');
        
        headingElement.addEventListener('click', function() {
            toggleVisibility(contentElement, indicator);
        });
        
        // Initially hide the content sections
        contentElement.style.display = 'none';
    });

    // Function to toggle visibility of sections and change indicator
    function toggleVisibility(content, indicator) {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            indicator.textContent = 'v';  // Change indicator to "v" when open
        } else {
            content.style.display = 'none';
            indicator.textContent = '>';  // Change indicator back to ">" when closed
        }
    }

    // Additional functionality for showing course descriptions (ITM500, ITM711, ITM820)
    const courseButtons = document.querySelectorAll('.course-btn');

    // Add click event listeners to each course button
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // Toggle visibility of <dd> (description)
            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';  // Show the description
            } else {
                targetElement.style.display = 'none';  // Hide the description
            }
        });
    });

    // Hide course descriptions initially
    document.querySelectorAll('dd').forEach(description => {
        description.style.display = 'none';
    });
});

