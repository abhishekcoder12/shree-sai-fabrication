// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll to contact section
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create JSON object from form data
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Send the JSON data to the server (or a third-party service)
        sendFormData(formData);
    });
});

function sendFormData(data) {
    // Send JSON object to a backend server or third-party service via POST request
    fetch('https://formspree.io/f/mjkwvgay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        // Optionally, reset the form here
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('Failed to send message: ' + error);
    });
}
