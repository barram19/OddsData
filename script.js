document.addEventListener('DOMContentLoaded', function() {
    fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_webpage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // Sending an empty content field or a predefined command if your function requires it
        body: JSON.stringify({
            content: "Fetch upcoming games and odds"
        })
    })
    .then(response => response.json())
    .then(data => {
        // Assuming 'data.messages' contains your HTML content
        // Find the HTML element where you want to display the odds and inject the content
        document.getElementById('oddsDisplay').innerHTML = data.messages.join('');
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('oddsDisplay').innerHTML = '<p>Error fetching odds.</p>';
    });
});
