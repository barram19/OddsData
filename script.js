document.addEventListener('DOMContentLoaded', function() {
    // Display a loading message or spinner
    document.getElementById('apiResponse').innerHTML = '<p>Loading odds...</p>';

   fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_web', {
        method: 'OPTIONS',
        headers: {
            'Content-Type': 'html',
        },
    })
    .then(response => {
        if (response.ok) {
            return fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_web', {
        method: 'GET' // Changed from 'OPTIONS' to 'GET'
        // Removed headers since you're expecting HTML response, not JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
    })

    .then(html => {
        // Assuming the server responds with HTML, display it
        document.getElementById('apiResponse').innerHTML = html;
    })
    .catch(error => {
        console.error('Error:', error);
        // Display a user-friendly error message on the webpage
        document.getElementById('apiResponse').innerHTML = `<p>Failed to load odds. Please try again later. Error: ${error.message}</p>`;
    });
});
