document.addEventListener('DOMContentLoaded', function() {
    // Display a loading message or spinner
    document.getElementById('apiResponse').innerHTML = '<p>Loading odds...</p>';
    
    fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_web', {
        method: 'OPTIONS',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        // Assuming the server responds with HTML, display it
        document.getElementById('apiResponse').innerHTML = html;
    })

    .catch(error => {
        console.error('Error:', error);
        // Display a user-friendly error message on the webpage
        document.getElementById('apiResponse').innerHTML = '<p>Failed to load odds. Please try again later.</p>';
    });
});
