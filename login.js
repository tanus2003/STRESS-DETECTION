// login.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored user data from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if the entered credentials match the stored ones
    if (email === storedEmail && password === storedPassword) {
        // If login is successful, redirect to the stress detection page
        window.location.href = 'stress-detection.html';
    } else {
        // If credentials are incorrect, show an error message
        document.getElementById('error-message').textContent = 'Invalid email or password';
    }
});
