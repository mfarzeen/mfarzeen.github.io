document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlighting functions
    window.highlight = function(element) {
        element.style.backgroundColor = '#d3cce3';
    }

    window.unhighlight = function(element) {
        element.style.backgroundColor = '#6c5fe0';
    }

    // Function to navigate to a different page
    window.navigateTo = function(page) {
        window.location.href = page;
    }

    // Dropdown for portfolio
    const portfolioTab = document.getElementById('portfolio-tab');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (portfolioTab) {
        portfolioTab.addEventListener('click', function() {
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Add click event listeners to each course button (for sections in Home page)
    const courseButtons = document.querySelectorAll('.course-btn');

    // Additional functionality for showing course descriptions (if applicable)
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Toggle visibility of <dd> (description)
                targetElement.style.display = targetElement.style.display === 'none' || targetElement.style.display === '' ? 'block' : 'none';
            }
        });
    });

    // Name prompt functionality (if applicable)
    const namePromptBtn = document.getElementById('namePromptBtn');
    const nameOutput = document.getElementById('nameOutput');

    if (namePromptBtn) {
        namePromptBtn.addEventListener('click', function() {
            const name = prompt('Please enter your name:');
            if (name) {
                nameOutput.textContent = `Hello, ${name}! Welcome to my website.`;
            }
        });
    }

    // Enlarge image functionality (if applicable)
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        window.enlargeImage = function() {
            profilePic.style.width = profilePic.style.width === '400px' ? '200px' : '400px';
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality for sections
    const sections = [
        { heading: 'institutions-heading', content: 'institutions-content' },
        { heading: 'activities-heading', content: 'activities-content' },
        { heading: 'awards-heading', content: 'awards-content' },
        { heading: 'courses-heading', content: 'courses-content' }
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
});
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality for Most Useful Courses
    const coursesHeading = document.getElementById('courses-heading');
    const coursesContent = document.getElementById('courses-content');
    const indicator = coursesHeading.querySelector('.dropdown-indicator');

    coursesHeading.addEventListener('click', function() {
        toggleVisibility(coursesContent, indicator);
    });

    // Initially hide the content sections
    coursesContent.style.display = 'none';

    // Function to toggle visibility of courses and change indicator
    function toggleVisibility(content, indicator) {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            indicator.textContent = 'v';  // Change indicator to "v" when open
        } else {
            content.style.display = 'none';
            indicator.textContent = '>';  // Change indicator back to ">" when closed
        }
    }
});
