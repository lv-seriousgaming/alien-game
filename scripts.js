document.getElementById('submit').addEventListener('click', function() {
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block'; // Show the feedback div
    feedback.textContent = 'Thank you for your submission! Your insights are invaluable to us. 🚀'; // Custom feedback message
});
