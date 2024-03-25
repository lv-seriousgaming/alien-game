document.getElementById('submit').addEventListener('click', function() {
    var feedback = document.getElementById('feedback');
    feedback.style.display = 'block'; // Show the feedback div
    feedback.textContent = 'Thank you for your submission!'; // Simple feedback message
    // You can expand this to include more detailed feedback based on the inputs
});
