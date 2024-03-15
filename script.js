document.addEventListener('DOMContentLoaded', function() {
    // Display a loading message or spinner
    document.getElementById('apiResponse').innerHTML = '<p>Loading odds...</p>';

    fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_webpage') // Default to GET method
    .then(response => {
        if (!response.ok) {
            // If the server response was not OK, throw an error to be caught in the catch block
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.text(); // Process the response body as text (HTML content)
    })
    .then(html => {
        // Display the HTML content returned by the server
        document.getElementById('apiResponse').innerHTML = html;
    })
    .catch(error => {
        console.error('Error:', error);
        // Display a user-friendly error message on the webpage
        document.getElementById('apiResponse').innerHTML = `<p>Failed to load odds. Please try again later. Error: ${error.message}</p>`;
    });
});
