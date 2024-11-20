// script.js
document.getElementById('stress-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const sleepTime = document.getElementById('sleep-time').value;
    const exercise = document.getElementById('exercise').value;
    const heartbeat = document.getElementById('heartbeat').value;
    const description = document.getElementById('description').value;

    // Simple logic to calculate stress level based on user inputs
    let stressLevel = "Unknown";
    let message = "";
    let recommendations = "";
    let doctorInfo = "";

    // Predicting stress level based on form inputs (You can add more complex logic here)
    if (age > 40 && sleepTime < 6) {
        stressLevel = "High Stress";
        message = "It seems like you're experiencing high stress. It's important to take action to manage it.";
        recommendations = `
            <p>We recommend the following to help reduce stress:</p>
            <ul>
                <li><b>Yoga Asanas:</b> Try relaxing yoga poses like <a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" target="_blank">this video on yoga</a>.</li>
                <li><b>Funny Video:</b> Watch a funny video to help lift your mood: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Funny Video</a>.</li>
            </ul>
            <p>If your stress level persists, we recommend consulting a doctor for a detailed check-up.</p>
        `;
        doctorInfo = `
            <p><b>Consult a Doctor:</b> If your stress level is high, it may be beneficial to consult with a healthcare professional. You can schedule an appointment with a doctor for better guidance.</p>
        `;
    } else if (exercise === "no" && heartbeat > 80) {
        stressLevel = "Moderate Stress";
        message = "You're experiencing moderate stress. It might help to relax and incorporate more physical activity into your routine.";
        recommendations = `
            <p>Here are some suggestions to help alleviate stress:</p>
            <ul>
                <li><b>Yoga Asanas:</b> Try these poses to help relax: <a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" target="_blank">Yoga for Stress Relief</a></li>
                <li><b>Funny Video:</b> Enjoy a lighthearted video to relax: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Funny Video</a></li>
            </ul>
        `;
    } else {
        stressLevel = "Low Stress";
        message = "You're experiencing low stress. Keep up the good work and continue taking care of yourself!";
        recommendations = `
            <p>Great job in keeping your stress level low! Keep practicing healthy habits like:</p>
            <ul>
                <li>Maintaining a balanced diet</li>
                <li>Exercising regularly</li>
                <li>Getting sufficient sleep</li>
            </ul>
            <p>Continue doing what you're doing to stay stress-free!</p>
        `;
    }

    // Displaying the result, message, recommendations, and doctor info
    document.getElementById('result').textContent = `Predicted Stress Level: ${stressLevel}`;
    document.getElementById('message').innerHTML = message;
    document.getElementById('recommendations').innerHTML = recommendations;
    document.getElementById('doctor-info').innerHTML = doctorInfo;

    // Disable the form after submission to prevent further changes
    document.getElementById('stress-form').querySelectorAll('input, select, textarea').forEach(function(field) {
        field.disabled = true;
    });
    document.getElementById('submit-btn').disabled = true;

    // Show the logout button
    document.getElementById('logout-btn').style.display = 'inline-block';

    // Show the feedback form
    document.getElementById('feedback-form').style.display = 'block';
});

// Logout function
function logout() {
    // Redirect to the login page
    window.location.href = 'index.html';
}

// Handle feedback form submission (you can process this data or store it for future use)
document.getElementById('feedback').addEventListener('submit', function(event) {
    event.preventDefault();

    const feeling = document.getElementById('feeling').value;
    const likes = document.getElementById('likes').value;
    const suggestions = document.getElementById('suggestions').value;

    // For now, just log the feedback to the console (or you can send this data to a server)
    console.log('Feedback received:');
    console.log('How do you feel now?', feeling);
    console.log('What did you like the most?', likes);
    console.log('Suggestions for improvement:', suggestions);

    // Show a thank you message after feedback submission
    alert('Thank you for your feedback! We appreciate your time.');
    window.location.href = 'index.html';  // Redirect to the login page after feedback
});
