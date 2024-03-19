document.addEventListener('DOMContentLoaded', function() {
    fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_webpage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: "Fetch upcoming games and odds"
        })
    })
    .then(response => response.text()) // Change this to .text()
    .then(html => {
        document.getElementById('oddsDisplay').innerHTML = html; // Directly use the HTML response
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('oddsDisplay').innerHTML = '<p>Error fetching odds.</p>';
    });
});
