// register.js
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    // Save the user data to localStorage (simulating a user database)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Show registration success message and redirect to login page
    alert('Registration successful! You can now login.');
    window.location.href = 'index.html'; // Redirect to the login page
});
